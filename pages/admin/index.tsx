import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import { client } from '@/apollo';
import { SigninAdmin } from '@/apollo/queries';

const defaultValues = {
  nickname: '',
  password: '',
};

const Admin: React.FC = () => {
  const router = useRouter();
  const { data } = useQuery(SigninAdmin);

  React.useEffect(() => {
    if (
      data?.signinAdmin?.data?.token === localStorage.getItem('admin-token')
    ) {
      router.push('/admin/data');
    }
  }, [data]);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues,
  });
  const { t } = useTranslation();

  const onSubmit = async (formData: { nickname: string; password: string }) => {
    const { data } = await client.query({
      query: SigninAdmin,
      variables: formData,
    });

    if (!data.signinAdmin.error) {
      await localStorage.setItem('admin-token', data.signinAdmin.data.token);
      router.push('/admin/data', '/admin/data?' + data.signinAdmin.data.token);
    } else {
      if (data.signinAdmin.message === 'Unidentified')
        setError('nickname', { type: 'Unidentified' }, { shouldFocus: true });
      if (data.signinAdmin.message === 'Unauthorized')
        setError('password', { type: 'Unauthorized' }, { shouldFocus: true });
    }
  };

  return (
    <div className='flex justify-center items-center h-full'>
      <form
        className='grid grid-rows-3 gap-0.5'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className='underline'>Direct admin login</h2>
        <TextField
          {...register('nickname')}
          autoComplete='off'
          label={t('admin-login-nickname-label')}
        />
        <TextField
          {...register('password')}
          type='password'
          autoComplete='off'
          label={t('admin-login-password-label')}
        />
        {errors.nickname && (
          <span className='text-red-500'>{errors.nickname.type}</span>
        )}
        {errors.password && (
          <span className='text-red-500'>{errors.password.type}</span>
        )}
        <Button type='submit' variant='contained'>
          {t('admin-login-button')}
        </Button>
      </form>
    </div>
  );
};
export default Admin;
