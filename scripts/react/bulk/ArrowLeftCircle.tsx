import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowLeftCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.825 8.258c-.181.048-.309.166-1.814 1.667C7.354 11.577 7.242 11.709 7.242 12c0 .292.11.421 1.784 2.086 1.575 1.568 1.641 1.628 1.83 1.666a.751.751 0 0 0 .886-.533c.052-.179.052-.226 0-.399-.053-.175-.161-.298-.99-1.128l-.931-.932 3.159-.001c2.987-.001 3.169-.005 3.32-.075a.734.734 0 0 0 .398-.413c.154-.368-.018-.78-.398-.955-.151-.07-.333-.074-3.32-.075l-3.159-.001.931-.932c.813-.813.938-.955.987-1.119a.75.75 0 0 0-.515-.93 3.216 3.216 0 0 0-.201-.056l-.198.055'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowLeftCircle);
export default ForwardRef;
