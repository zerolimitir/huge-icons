import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRemoveThin = (
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
            d='M15.712 16.773a.75.75 0 1 0 1.06-1.06L13.062 12l3.712-3.712a.75.75 0 0 0-1.06-1.061L12 10.939 8.288 7.227a.75.75 0 0 0-1.061 1.06L10.939 12l-3.712 3.712a.75.75 0 0 0 1.06 1.061L12 13.061l3.712 3.712Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRemoveThin);
export default ForwardRef;
