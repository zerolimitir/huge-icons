import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMoneyUser = (
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
            d='M18 2.75H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h7a1 1 0 0 0 1-1v-1a4 4 0 0 1 4-4h3a1 1 0 0 0 1-1v-5a4 4 0 0 0-4-4Zm-11 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm5 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm9 7a2 2 0 1 0-2 2c-1.246 0-2.377.641-3.208 1.684-.451.566.024 1.316.748 1.316h4.92c.724 0 1.199-.75.748-1.316-.83-1.043-1.962-1.684-3.208-1.684a2 2 0 0 0 2-2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyUser);
export default ForwardRef;
