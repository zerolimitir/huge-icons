import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCardUser = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 25 24'
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
            d='M18.375 2c1.953 0 3.579 1.4 3.93 3.25H2.445A4.001 4.001 0 0 1 6.375 2h12Zm4 7.25v-2.5h-20v2.5h20Zm0 1.5h-20V16a4 4 0 0 0 4 4h7a1 1 0 0 0 1-1v-1a4 4 0 0 1 4-4h3a1 1 0 0 0 1-1v-2.25Zm-16 6.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm15 0a2 2 0 1 0-2 2c-1.246 0-2.377.641-3.208 1.684-.451.566.024 1.316.748 1.316h4.92c.724 0 1.199-.75.748-1.316C21.753 19.641 20.62 19 19.375 19a2 2 0 0 0 2-2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCardUser);
export default ForwardRef;
