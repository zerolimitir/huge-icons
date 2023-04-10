import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCardRemove = (
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
            d='M18 3c1.953 0 3.579 1.4 3.93 3.25H2.07A4.001 4.001 0 0 1 6 3h12Zm4 7.25v-2.5H2v2.5h20Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M22 11.75H2V17a4 4 0 0 0 4 4h7a1 1 0 0 0 1-1v-1a4 4 0 0 1 4-4h3a1 1 0 0 0 1-1v-2.25ZM6 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M20.055 16.803a.75.75 0 0 1 0 1.06l-.883.884.883.884a.75.75 0 0 1-1.06 1.06l-.884-.883-.884.884a.75.75 0 1 1-1.06-1.06l.883-.885-.884-.884a.75.75 0 0 1 1.061-1.06l.884.884.884-.884a.75.75 0 0 1 1.06 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCardRemove);
export default ForwardRef;
