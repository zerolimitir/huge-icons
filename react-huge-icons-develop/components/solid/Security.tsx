import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSecurity = (
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
            d='m5.378 4.943 4.998-2.221a4 4 0 0 1 3.249 0l4.978 2.212c1.455.647 2.41 2.101 2.309 3.691-.391 6.098-2.135 8.854-6.847 12.052a3.685 3.685 0 0 1-4.13 0c-4.697-3.181-6.505-5.9-6.865-12.073-.092-1.58.862-3.019 2.308-3.661Zm10.187 5.55a.75.75 0 1 0-1.13-.987l-2.87 3.28a.25.25 0 0 1-.344.03L9.47 11.414a.75.75 0 0 0-.937 1.171l1.752 1.403a1.75 1.75 0 0 0 2.41-.214l2.87-3.28Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSecurity);
export default ForwardRef;
