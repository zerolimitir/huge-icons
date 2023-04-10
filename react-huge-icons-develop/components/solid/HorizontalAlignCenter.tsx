import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHorizontalAlignCenter = (
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
            d='M12.75 2a.75.75 0 0 0-1.5 0v3H9a2 2 0 0 0-2 2v1.5a2 2 0 0 0 2 2h2.25v3H6a2 2 0 0 0-2 2V17a2 2 0 0 0 2 2h5.25v3a.75.75 0 0 0 1.5 0v-3H18a2 2 0 0 0 2-2v-1.5a2 2 0 0 0-2-2h-5.25v-3H15a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2.25V2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHorizontalAlignCenter);
export default ForwardRef;
