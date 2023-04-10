import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUsersTriple = (
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
        <ellipse
            cx={12}
            cy={16.5}
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
            rx={6}
            ry={2.5}
        />
        <circle
            cx={12}
            cy={8}
            r={3}
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M6.445 13.261c-1.238.052-2.376.275-3.26.628-.504.202-.963.462-1.307.788-.347.327-.628.774-.628 1.323 0 .549.281.996.628 1.323.344.326.803.586 1.308.788.5.2 1.081.358 1.716.467-.494-.533-.803-1.128-.882-1.758a5.336 5.336 0 0 1-.277-.102c-.4-.16-.674-.332-.835-.484-.158-.15-.158-.23-.158-.234 0-.005 0-.084.158-.234.161-.152.435-.324.835-.484.203-.081.429-.155.675-.221.414-.69 1.116-1.305 2.027-1.8ZM19.98 16.82c-.078.63-.388 1.225-.882 1.758a8.57 8.57 0 0 0 1.716-.467c.505-.202.964-.462 1.309-.788.346-.327.627-.774.627-1.323 0-.549-.281-.996-.627-1.323-.345-.326-.804-.586-1.309-.788-.883-.353-2.02-.576-3.26-.627.912.494 1.615 1.109 2.028 1.799.246.066.472.14.675.221.4.16.674.332.835.484.158.15.158.23.158.234 0 .005 0 .084-.158.234-.161.152-.435.324-.835.484-.088.035-.18.069-.277.102Zm-3.466-6.668a5.01 5.01 0 0 1-.851 1.252 2.75 2.75 0 1 0 1.029-5.136c.171.465.276.963.302 1.482H17a1.25 1.25 0 1 1-.486 2.402ZM7.308 6.267a2.75 2.75 0 1 0 1.029 5.136 5.01 5.01 0 0 1-.851-1.25 1.25 1.25 0 1 1-.48-2.402 4.98 4.98 0 0 1 .302-1.484Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUsersTriple);
export default ForwardRef;
