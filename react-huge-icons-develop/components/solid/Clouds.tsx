import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgClouds = (
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
            d='M17.419 12.819c.322.252.615.54.874.859C20.454 12.916 22 10.885 22 8.5 22 5.462 19.493 3 16.4 3c-2.311 0-4.296 1.375-5.15 3.338A4.064 4.064 0 0 0 10 6.143 4.001 4.001 0 0 0 6.28 8.62 7.23 7.23 0 0 1 7.6 8.5a7.12 7.12 0 0 1 5.938 3.162 5.528 5.528 0 0 1 3.88 1.157ZM7.6 21C4.507 21 2 18.538 2 15.5c0-2.493 1.688-4.598 4.003-5.273A5.696 5.696 0 0 1 7.6 10c2.311 0 4.296 1.375 5.15 3.338a4.062 4.062 0 0 1 1.25-.195c.943 0 1.81.32 2.493.856A3.896 3.896 0 0 1 18 17.071C18 19.241 16.21 21 14 21H7.6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgClouds);
export default ForwardRef;
