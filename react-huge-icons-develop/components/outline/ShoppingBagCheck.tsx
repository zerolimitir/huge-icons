import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgShoppingBagCheck = (
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
            d='M9 7h-.75H9Zm.75-1a.75.75 0 0 0-1.5 0h1.5Zm6 0a.75.75 0 0 0-1.5 0h1.5ZM15 7h.75H15ZM9.75 7V6h-1.5v1h1.5Zm4.5-1v1h1.5V6h-1.5ZM12 9.25A2.25 2.25 0 0 1 9.75 7h-1.5A3.75 3.75 0 0 0 12 10.75v-1.5Zm0 1.5A3.75 3.75 0 0 0 15.75 7h-1.5A2.25 2.25 0 0 1 12 9.25v1.5ZM4.443 6.342l-.74-.123.74.123Zm-1.667 10 .74.124-.74-.124Zm16.781-10 .74-.123-.74.123Zm.37 6.781a.75.75 0 1 0 1.48-.246l-1.48.246ZM13 21.75a.75.75 0 0 0 0-1.5v1.5Zm-4.611-18h7.223v-1.5H8.389v1.5ZM3.703 6.22l-1.667 10 1.48.246 1.667-10-1.48-.247Zm15.114.246 1.11 6.657 1.48-.246-1.11-6.658-1.48.247ZM13 20.25H6.722v1.5H13v-1.5Zm-4.611-18a4.75 4.75 0 0 0-4.686 3.97l1.48.246A3.25 3.25 0 0 1 8.389 3.75v-1.5Zm7.223 1.5a3.25 3.25 0 0 1 3.205 2.716l1.48-.247A4.75 4.75 0 0 0 15.61 2.25v1.5ZM2.035 16.22a4.75 4.75 0 0 0 4.686 5.53v-1.5a3.25 3.25 0 0 1-3.206-3.784l-1.48-.247Zm14.433 2.194a.75.75 0 0 0-.937 1.172l.937-1.172Zm1.285 1.988.468-.585-.468.585Zm1.377-.122-.564-.494.564.494Zm3.434-2.786a.75.75 0 1 0-1.128-.988l1.128.988Zm-7.033 2.092 1.753 1.402.937-1.171-1.753-1.403-.937 1.172Zm4.164 1.188 2.87-3.28-1.13-.988-2.87 3.28 1.13.988Zm-2.41.214a1.75 1.75 0 0 0 2.41-.214l-1.13-.988a.25.25 0 0 1-.344.03l-.937 1.172Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShoppingBagCheck);
export default ForwardRef;
