import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRoofHomeNotification = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            d='M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z'
            opacity={0.4}
        />
        <path stroke='currentColor' strokeLinecap='round' strokeWidth={1.5} d='M11 19h2' />
        <path
            fill='currentColor'
            d='M8.667 12.333a3.333 3.333 0 1 1 6.667 0v1.234c0 .595.246 1.164.68 1.571.712.668.24 1.862-.736 1.862H8.721c-.976 0-1.448-1.194-.736-1.862.434-.407.68-.976.68-1.57v-1.235Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoofHomeNotification);
export default ForwardRef;
