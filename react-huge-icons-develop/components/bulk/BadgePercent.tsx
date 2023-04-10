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
            d='M10.054 2.658a3 3 0 0 1 3.892 0l.683.582a3 3 0 0 0 1.707.707l.894.072a3 3 0 0 1 2.752 2.751l.071.894a3 3 0 0 0 .707 1.708l.582.682a3 3 0 0 1 0 3.892l-.582.683a3 3 0 0 0-.707 1.707l-.071.894a3 3 0 0 1-2.752 2.752l-.894.071a3 3 0 0 0-1.707.707l-.683.582a3 3 0 0 1-3.892 0l-.682-.582a3 3 0 0 0-1.708-.707l-.894-.071a3 3 0 0 1-2.75-2.752l-.072-.894a3 3 0 0 0-.707-1.707l-.582-.683a3 3 0 0 1 0-3.892l.582-.682a3 3 0 0 0 .707-1.708l.072-.894a3 3 0 0 1 2.75-2.75l.894-.072a3 3 0 0 0 1.708-.707l.682-.582Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M10 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M15.53 8.47a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBadgePercent);
export default ForwardRef;
