import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRedo = (
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
            d='M21.75 12a.75.75 0 0 0-1.5 0h1.5Zm-1.954-4.5v.75a.75.75 0 0 0 .75-.75h-.75Zm.75-4.5a.75.75 0 0 0-1.5 0h1.5Zm-5.171 3.75a.75.75 0 0 0 0 1.5v-1.5ZM20.25 12A8.25 8.25 0 0 1 12 20.25v1.5A9.75 9.75 0 0 0 21.75 12h-1.5ZM12 20.25A8.25 8.25 0 0 1 3.75 12h-1.5A9.75 9.75 0 0 0 12 21.75v-1.5ZM3.75 12A8.25 8.25 0 0 1 12 3.75v-1.5A9.75 9.75 0 0 0 2.25 12h1.5ZM12 3.75a8.247 8.247 0 0 1 7.147 4.126l1.298-.752A9.747 9.747 0 0 0 12 2.25v1.5Zm8.546 3.75V3h-1.5v4.5h1.5Zm-.75-.75h-4.421v1.5h4.421v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRedo);
export default ForwardRef;
