import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHorizontalAlignLeft = (
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
            d='M4.75 2a.75.75 0 0 0-1.5 0v20a.75.75 0 0 0 1.5 0v-2H12a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H4.75v-4H18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4.75V2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHorizontalAlignLeft);
export default ForwardRef;
