import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgImageCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M8.438 7.075a1.984 1.984 0 0 0-.872.542c-.78.813-.759 2.04.05 2.816.814.781 2.04.76 2.817-.049A1.91 1.91 0 0 0 11 9c0-.895-.597-1.678-1.477-1.936a2.275 2.275 0 0 0-1.085.011m7.615 4.104a4.283 4.283 0 0 0-1.605.656c-.125.086-1.191 1.023-2.368 2.083-1.177 1.06-2.257 2.017-2.4 2.126a4.77 4.77 0 0 1-1.38.679c-.411.109-1.221.147-1.651.078-.849-.137-1.176-.313-2.933-1.579-.801-.578-1.462-1.045-1.469-1.039-.007.005.034.185.092.399.889 3.26 3.31 5.834 6.486 6.894a9.97 9.97 0 0 0 6.903-.199A10.734 10.734 0 0 0 18.26 19.8c.416-.33 1.212-1.129 1.553-1.559a10.13 10.13 0 0 0 1.921-3.949c.088-.376.091-.413.031-.466-.282-.246-3.013-2.16-3.247-2.275-.787-.385-1.663-.517-2.465-.372'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgImageCircle);
export default ForwardRef;
