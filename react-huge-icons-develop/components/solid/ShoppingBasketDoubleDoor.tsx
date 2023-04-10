import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgShoppingBasketDoubleDoor = (
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
            d='M18.19 6.003 15.6 2.55a.75.75 0 0 0-1.2.9L16.312 6H7.687L9.6 3.45a.75.75 0 0 0-1.2-.9L5.81 6.003C3.912 6.076 2.404 7.48 2.07 9.25h19.86c-.334-1.769-1.842-3.174-3.74-3.247Zm2.092 12.805A3.973 3.973 0 0 1 16.4 22H7.6a3.972 3.972 0 0 1-3.882-3.192l-1.635-8a4.094 4.094 0 0 1-.011-.058h19.856l-.011.058-1.635 8ZM9 13.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm6.75.75a.75.75 0 0 0-1.5 0v4a.75.75 0 1 0 1.5 0v-4Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShoppingBasketDoubleDoor);
export default ForwardRef;
