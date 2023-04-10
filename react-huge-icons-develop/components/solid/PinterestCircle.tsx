import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPinterestCircle = (
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
            d='M22 12c0 5.523-4.477 10-10 10a9.966 9.966 0 0 1-2.41-.293l.004-.016 1.078-4.095a5.75 5.75 0 1 0-3.652-2.72.75.75 0 1 0 1.298-.752 4.25 4.25 0 1 1 2.735 2.02l1.172-4.453a.75.75 0 1 0-1.45-.382l-2.613 9.928A10.003 10.003 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPinterestCircle);
export default ForwardRef;
