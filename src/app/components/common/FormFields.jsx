'use client'

import { forwardRef, useState } from 'react'
import { BiPencil } from 'react-icons/bi'
import {
  Box,
  TextField,
  Avatar,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  FormHelperText,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

export const BasicTextField = ({
  id,
  label,
  name,
  onChange,
  onBlur,
  value,
  error,
  width,
}) => {
  return (
    <Box
      sx={{
        '& > :not(style)': { m: '10px 0', width, maxWidth: '450px' },
      }}>
      <TextField
        id={id}
        name={name}
        label={label}
        variant="standard"
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        helperText={error}
        noValidate
        autoComplete="off"
        sx={{
          '& .MuiInput-underline:before': {
            borderBottomColor: 'var(--text-primary)',
          },
          '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottomColor: 'var(--text-primary)',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'var(--bg-secondary)',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'var(--bg-secondary)',
          },
          '& .MuiFormHelperText-root': {
            color: 'var(--far-gray)',
            fontSize: '12px',
            marginLeft: 0,
          },
          '& .MuiFormHelperText-contained': {
            marginTop: '5px',
          },
          '& > :not(style)': { color: 'var(--text-primary)' },
        }}
      />
    </Box>
  )
}

export const PasswordField = ({
  id,
  label,
  name,
  onChange,
  onBlur,
  value,
  error,
  width,
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (e) => {
    e.preventDefault()
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <FormControl
        sx={{
          m: '10px 0',
          width,
          maxWidth: '450px',
          '& .MuiInput-underline:before': {
            borderBottomColor: 'var(--text-primary)',
          },
          '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottomColor: 'var(--text-primary)',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'var(--bg-secondary)',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'var(--bg-secondary)',
          },
          '& .MuiFormHelperText-root': {
            color: 'var(--far-gray)',
            fontSize: '12px',
            marginLeft: 0,
          },
          '& .MuiFormHelperText-contained': {
            marginTop: '5px',
          },
          '& > :not(style)': { color: 'var(--text-primary)' },
        }}
        variant="standard">
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <Input
          id={id}
          name={name}
          type={showPassword ? 'text' : 'password'}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}>
                {showPassword ? (
                  <VisibilityOff className=" text-theme-purple" />
                ) : (
                  <Visibility className=" text-theme-purple" />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </Box>
  )
}

export const SelectField = ({
  id,
  label,
  data,
  onChange,
  onBlur,
  value,
  width,
  error,
}) => {
  return (
    <Box
      sx={{
        '& > :not(style)': { m: '10px 0', width, maxWidth: '450px' },
      }}>
      <TextField
        id={id}
        select
        label={label}
        onChange={onChange}
        onBlur={onBlur}
        defaultValue={value}
        SelectProps={{
          native: true,
        }}
        helperText={error}
        variant="standard"
        sx={{
          '& .MuiInput-underline:before': {
            borderBottomColor: 'var(--text-primary)',
          },
          '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottomColor: 'var(--text-primary)',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'var(--bg-secondary)',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'var(--bg-secondary)',
          },
          '& .MuiFormHelperText-root': {
            color: 'var(--far-gray)',
            fontSize: '12px',
            marginLeft: 0,
          },
          '& .MuiFormHelperText-contained': {
            marginTop: '5px',
          },
          '& > :not(style)': { color: 'var(--text-primary)' },
        }}>
        {(data || []).map((option) => (
          <option
            key={option.value}
            value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
    </Box>
  )
}

export const FileField = forwardRef(
  ({ id, name, label, handleFileChange, handleFileClick, image }, ref) => {
    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', position: 'relative' }}>
        {!!image && (
          <Avatar
            src={image}
            sx={{
              width: '55vw',
              maxWidth: '250px',
              height: '55vw',
              maxHeight: '250px',
              margin: '0 auto 10px',
            }}></Avatar>
        )}
        <Input
          id={id}
          name={name}
          type="file"
          inputRef={ref}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <div
          onClick={handleFileClick}
          className=" bg-black text-white flex gap-1 py-1.5 px-2.5 rounded-md absolute bottom-4 phone:bottom-6 right-4 phone:right-6 border-[0.5px] shadow-sm shadow-closer-gray border-closer-gray hover:cursor-pointer">
          <BiPencil className=" text-xl mt-[2px]" />
          {!!label && <p className=" text-sm">{label}</p>}
        </div>
      </Box>
    )
  }
)
