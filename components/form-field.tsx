/* eslint-disable react/prop-types */
import React, { ElementType } from 'react';
import { Controller, Control } from 'react-hook-form';
import { TextField, MenuItem } from '@mui/material';
import { MdArrowDropDown } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

type FormFieldProps = {
  control: Control<any>;
  name: string;
  label: string;
};

const options = [
  { label: 'Voyageur', value: 'voyageur' },
  { label: 'Hôtelier', value: 'hôtelier' },
];

const FormField = ({ control, ...compProps }: FormFieldProps) => {
  const { t } = useTranslation();

  return (
    <div className={`z-30 ${compProps.name === 'notes' && 'row-span-2'}`}>
      <Controller
        name={compProps.name}
        control={control}
        render={(props) => {
          return (
            <TextField
              autoComplete='off'
              label={t(compProps.label)}
              name={props.field.name}
              select={props.field.name === 'profile'}
              SelectProps={{
                IconComponent: MdArrowDropDown,
              }}
              multiline={props.field.name === 'notes'}
              rows={4}
              onChange={(e) => props.field.onChange(e.target.value)}
              value={props.field.value}
              sx={{
                width: '100%',
                '& label': { color: 'black' },
                '& fieldset': {
                  borderColor: 'white',
                  backgroundColor: 'white',
                },
                '& label.Mui-focused': {
                  color: 'black !important',
                  fontWeight: 'bold',
                },
                '& .Mui-focused fieldset': {
                  borderColor: 'black !important',
                  borderWidth: 2,
                },
                '& svg': {
                  zIndex: 30,
                  fontSize: 28,
                },
                '& input,textarea,div[role=button]': {
                  zIndex: 10,
                },
                '& .Mui-focused input': {
                  fontWeight: 'bold',
                },
                '& .Mui-focused > div[role=button]': {
                  fontWeight: 'bold',
                },
                '& .Mui-focused textarea': {
                  fontWeight: 'bold',
                },
              }}
            >
              {props.field.name &&
                options.map((o) => (
                  <MenuItem key={o.value} value={o.value}>
                    {o.label}
                  </MenuItem>
                ))}
            </TextField>
          );
        }}
      ></Controller>
    </div>
  );
};
export default FormField;
