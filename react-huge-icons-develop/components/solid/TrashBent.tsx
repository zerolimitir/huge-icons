import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTrashBent = (
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
            d='M9.25 4.75a2.75 2.75 0 0 1 5.5 0v.166c2.385.29 4.613.952 6.578 1.91a.75.75 0 0 1-.657 1.348C18.18 6.96 15.204 6.25 12 6.25c-3.204 0-6.18.71-8.672 1.924a.75.75 0 1 1-.657-1.348c1.966-.958 4.194-1.62 6.579-1.91V4.75Zm9.015 13.533a4 4 0 0 1-3.99 3.715h-4.55a4 4 0 0 1-3.99-3.715l-.689-9.635C7.164 7.91 9.52 7.498 12 7.498s4.836.412 6.954 1.15l-.689 9.635Zm-7.515-7.285a.75.75 0 0 0-1.5 0v6a.75.75 0 1 0 1.5 0v-6Zm3.25-.75a.75.75 0 0 1 .75.75v6a.75.75 0 1 1-1.5 0v-6a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrashBent);
export default ForwardRef;
