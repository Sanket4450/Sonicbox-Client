import { useState } from 'react'
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  FormHelperText,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

export const BasicTextField = ({
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
        id="standard-basic"
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
        <InputLabel htmlFor="standard-adornment-password">{label}</InputLabel>
        <Input
          id="standard-adornment-password"
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
