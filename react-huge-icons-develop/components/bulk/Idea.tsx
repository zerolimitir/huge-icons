import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgIdea = (
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
        <path fill='currentColor' d='M8 18h8a4 4 0 0 1-8 0Z' />
        <path
            fill='currentColor'
            d='M8 18h8v-2.211c0-.654.333-1.253.808-1.702a7 7 0 1 0-9.617 0c.476.45.809 1.048.809 1.702V18Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M9.47 8.47a.75.75 0 0 1 1.06 0L12 9.94l1.47-1.47a.75.75 0 1 1 1.06 1.06l-1.78 1.78V19a.75.75 0 0 1-1.5 0v-7.69L9.47 9.53a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgIdea);
export default ForwardRef;
