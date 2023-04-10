import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBadgePercent = (
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
            d='M13.946 2.658a3 3 0 0 0-3.892 0l-.682.582a3 3 0 0 1-1.708.707l-.894.072A3 3 0 0 0 4.02 6.77l-.072.894a3 3 0 0 1-.707 1.708l-.582.682a3 3 0 0 0 0 3.892l.582.683a3 3 0 0 1 .707 1.707l.072.894a3 3 0 0 0 2.751 2.752l.894.071a3 3 0 0 1 1.708.707l.682.582a3 3 0 0 0 3.892 0l.683-.582a3 3 0 0 1 1.707-.707l.894-.071a3 3 0 0 0 2.752-2.752l.071-.894a3 3 0 0 1 .707-1.707l.582-.683a3 3 0 0 0 0-3.892l-.582-.682a3 3 0 0 1-.707-1.708l-.071-.894a3 3 0 0 0-2.753-2.75l-.894-.072a3 3 0 0 1-1.707-.707l-.683-.582ZM9 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-.47-5.47a.75.75 0 1 0-1.06-1.06l-6 6a.75.75 0 0 0 1.06 1.06l6-6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBadgePercent);
export default ForwardRef;
