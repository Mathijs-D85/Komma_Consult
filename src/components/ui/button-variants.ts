import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-komma-navy focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-komma-fuchsia text-white hover:bg-komma-fuchsia-dark',
        secondary: 'bg-gray-100 text-komma-navy hover:bg-gray-200',
        outline: 'bg-white text-komma-navy border-2 border-komma-navy hover:bg-komma-navy hover:text-white',
        ghost: 'text-komma-navy hover:bg-komma-navy/5',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)
