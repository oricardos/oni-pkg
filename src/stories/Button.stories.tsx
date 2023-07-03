import { Meta, StoryObj } from '@storybook/react'
import Button, {ButtonProps} from "../components/Button";


export default {
    title: 'Component/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        label: 'Button'
    }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
    args: {
        color: 'primary',
    }
}

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        color: 'secondary',
    }
}

export const Success: StoryObj<ButtonProps> = {
    args: {
        color: 'success',
    }
}

export const Warning: StoryObj<ButtonProps> = {
    args: {
        color: 'warning',
    }
}

export const Error: StoryObj<ButtonProps> = {
    args: {
        color: 'error',
    }
}

export const PrimaryOutlined: StoryObj<ButtonProps> = {
    args: {
        color: 'primary',
        outline: true,
    }
}

export const SecondaryOutlined: StoryObj<ButtonProps> = {
    args: {
        color: 'secondary',
        outline: true,
    }
}