import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgShoppingBasket = (
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
            d='M5.25 5v1.064C3.62 6.362 2.37 7.66 2.07 9.25h19.86c-.3-1.591-1.55-2.888-3.18-3.186V5A2.75 2.75 0 0 0 16 2.25H8A2.75 2.75 0 0 0 5.25 5ZM8 3.75c-.69 0-1.25.56-1.25 1.25v1h10.5V5c0-.69-.56-1.25-1.25-1.25H8Zm13.928 7H2.072l.011.058 1.635 8A3.972 3.972 0 0 0 7.6 22h8.8a3.972 3.972 0 0 0 3.882-3.192l1.635-8 .011-.058ZM9 13.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm6.75.75a.75.75 0 0 0-1.5 0v4a.75.75 0 1 0 1.5 0v-4Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShoppingBasket);
export default ForwardRef;
