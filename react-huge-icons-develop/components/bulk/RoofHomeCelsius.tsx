import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRoofHomeCelsius = (
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
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12.01 12.25c-1.25 0-2.26 1.01-2.26 2.25s1.01 2.25 2.26 2.25c.574 0 1.096-.212 1.495-.563a.75.75 0 1 1 .99 1.126 3.753 3.753 0 0 1-2.486.937A3.755 3.755 0 0 1 8.25 14.5a3.755 3.755 0 0 1 3.76-3.75 3.75 3.75 0 0 1 2.485.937.75.75 0 1 1-.99 1.126 2.253 2.253 0 0 0-1.496-.563Z'
            clipRule='evenodd'
        />
        <path fill='currentColor' d='M16.5 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' />
    </svg>
);
const ForwardRef = forwardRef(SvgRoofHomeCelsius);
export default ForwardRef;
