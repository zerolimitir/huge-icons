import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgReload = (
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
            d='M15.558 1.733a.75.75 0 0 0-1.402.534l1.402-.534ZM8.442 22.267a.75.75 0 0 0 1.402-.534l-1.402.534Zm7.593-17.176-.379.647a.75.75 0 0 0 1.08-.914l-.7.267Zm-8.07 13.818.379-.647a.75.75 0 0 0-1.08.914l.7-.267ZM4.42 16.375a.75.75 0 1 0 1.298-.75l-1.298.75Zm15.158-8.75a.75.75 0 1 0-1.299.75l1.299-.75ZM19.25 12A7.25 7.25 0 0 1 12 19.25v1.5A8.75 8.75 0 0 0 20.75 12h-1.5Zm-14.5 0A7.25 7.25 0 0 1 12 4.75v-1.5A8.75 8.75 0 0 0 3.25 12h1.5ZM12 4.75c1.335 0 2.584.36 3.656.988l.758-1.295A8.713 8.713 0 0 0 12 3.25v1.5Zm4.736.074-1.178-3.091-1.402.534 1.178 3.09 1.402-.533ZM12 19.25a7.212 7.212 0 0 1-3.656-.988l-.758 1.294A8.713 8.713 0 0 0 12 20.75v-1.5Zm-4.736-.074 1.178 3.091 1.402-.534-1.178-3.09-1.402.533Zm-1.545-3.551A7.214 7.214 0 0 1 4.75 12h-1.5a8.71 8.71 0 0 0 1.171 4.375l1.298-.75Zm12.561-7.25A7.212 7.212 0 0 1 19.25 12h1.5a8.713 8.713 0 0 0-1.171-4.376l-1.299.752Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgReload);
export default ForwardRef;
