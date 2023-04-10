import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSpellCheck = (
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
            d='M9 3.25a.75.75 0 0 1 .692.462l5 12a.75.75 0 0 1-1.384.576l-1.475-3.538H6.167l-1.475 3.538a.75.75 0 0 1-1.384-.577l5-12A.75.75 0 0 1 9 3.25Zm-2.208 8h4.416L9 5.95l-2.208 5.3Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M20.515 13.455a.75.75 0 0 1 .03 1.06l-4.996 5.29a1.75 1.75 0 0 1-2.443.1l-2.608-2.348a.75.75 0 1 1 1.004-1.114l2.607 2.346a.25.25 0 0 0 .35-.014l4.996-5.29a.75.75 0 0 1 1.06-.03Z'
            clipRule='evenodd'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpellCheck);
export default ForwardRef;
