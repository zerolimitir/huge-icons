import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgOpenBoxSearch = (
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
            d='M11 2.812a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm-2.75 1.25a2.75 2.75 0 1 1 5.152 1.341l.628.629a.75.75 0 0 1-1.06 1.06l-.63-.628a2.75 2.75 0 0 1-4.09-2.402ZM4 11.74v5.087a2 2 0 0 0 1.106 1.79l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.825V11.74l-5.33 2.665a1.5 1.5 0 0 1-1.918-.51L12 12.767l-.752 1.127a1.5 1.5 0 0 1-1.919.51L4 11.739Zm7.976-1.661-7.96-3.992-1.987 2.957 8.002 4.022 1.945-2.987Zm0 0 2.022 2.987 8.02-3.965-2.027-2.988-8.015 3.966Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgOpenBoxSearch);
export default ForwardRef;
