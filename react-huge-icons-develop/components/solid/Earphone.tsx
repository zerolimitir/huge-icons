import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgEarphone = (
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
            fillRule='evenodd'
            d='M4 6a4 4 0 0 1 4-4 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2c-.345 0-.68-.044-1-.126V12.5a1.5 1.5 0 0 1-.75 1.3v1.971c0 .58.47 1.05 1.05 1.05h.486a2.964 2.964 0 0 1 0 5.929H3a.75.75 0 0 1 0-1.5h4.786a1.464 1.464 0 0 0 0-2.929H7.3a2.55 2.55 0 0 1-2.55-2.55V13.8A1.5 1.5 0 0 1 4 12.5V6Zm16 0a4 4 0 0 0-4-4 2 2 0 0 0-2 2v4a2 2 0 0 0 2 2c.345 0 .68-.044 1-.126V12.5a1.5 1.5 0 0 0 .75 1.3v1.971c0 .58-.47 1.05-1.05 1.05h-.486a2.964 2.964 0 0 0 0 5.929H21a.75.75 0 0 0 0-1.5h-4.786a1.464 1.464 0 0 1 0-2.929h.486a2.55 2.55 0 0 0 2.55-2.55V13.8a1.5 1.5 0 0 0 .75-1.3V6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgEarphone);
export default ForwardRef;
