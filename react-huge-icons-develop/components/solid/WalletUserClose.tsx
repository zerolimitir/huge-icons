import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWalletUserClose = (
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
            d='M22 6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1.5h4a3.5 3.5 0 1 1 0 7H2V16a4 4 0 0 0 4 4h7a1 1 0 0 0 1-1v-1a4 4 0 0 1 4-4h3a1 1 0 0 0 1-1V6ZM6 9a2 2 0 1 1 0 4H2V9h4Zm15 8a2 2 0 1 0-2 2c-1.246 0-2.377.641-3.208 1.684-.451.566.024 1.316.748 1.316h4.92c.724 0 1.199-.75.748-1.316C21.378 19.641 20.246 19 19 19a2 2 0 0 0 2-2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWalletUserClose);
export default ForwardRef;
