import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBookRemove = (
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
            d='M7 2h10a3 3 0 0 1 3 3v9.5H7a4.484 4.484 0 0 0-3 1.146V5a3 3 0 0 1 3-3Zm7.773 4.47a.75.75 0 0 1 0 1.06l-1.591 1.591 1.591 1.591a.75.75 0 0 1-1.06 1.061l-1.592-1.591-1.59 1.591a.75.75 0 1 1-1.061-1.06l1.59-1.592-1.59-1.59a.75.75 0 0 1 1.06-1.061l1.591 1.59 1.591-1.59a.75.75 0 0 1 1.061 0ZM7 16a3 3 0 1 0 0 6h10a3 3 0 0 0 3-3v-3H7Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookRemove);
export default ForwardRef;
