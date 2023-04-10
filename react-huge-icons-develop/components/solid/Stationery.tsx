import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgStationery = (
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
            d='M5 4a2 2 0 1 1 4 0v1.25H5V4Zm0 13.789V6.75h4v11.039a4 4 0 0 1-.672 2.219l-.912 1.368a.5.5 0 0 1-.832 0l-.912-1.368A4 4 0 0 1 5 17.788ZM14 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1.25h-2a.75.75 0 0 1 0-1.5h2v-2.5h-2a.75.75 0 0 1 0-1.5h2v-2.5h-2a.75.75 0 0 1 0-1.5h2v-2.5h-2a.75.75 0 0 1 0-1.5h2V4a2 2 0 0 0-2-2h-4Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStationery);
export default ForwardRef;
