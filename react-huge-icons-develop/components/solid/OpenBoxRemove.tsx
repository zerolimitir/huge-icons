import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgOpenBoxRemove = (
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
            d='M13.945 4.178a.75.75 0 1 0-1.061-1.06L12 4.002l-.884-.884a.75.75 0 0 0-1.06 1.06l.884.884-.884.884a.75.75 0 1 0 1.06 1.06L12 6.124l.884.884a.75.75 0 0 0 1.06-1.061l-.883-.884.884-.884Zm-9.93 1.908 7.96 3.992-1.944 2.987L2.03 9.042l1.987-2.956Zm7.96 3.992 8.016-3.966L22.017 9.1l-8.02 3.965-2.021-2.987ZM4 11.739v5.087a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.826V11.74l-5.33 2.665a1.5 1.5 0 0 1-1.918-.51L12 12.766l-.752 1.128a1.5 1.5 0 0 1-1.919.51L4 11.739Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgOpenBoxRemove);
export default ForwardRef;
