import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDirectionDownDouble = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.768 6.284a.874.874 0 0 0-.287.195.723.723 0 0 0-.127.897c.054.095 4.611 3.788 5.202 4.216a.718.718 0 0 0 .665.119c.219-.075 5.33-4.168 5.438-4.355a.774.774 0 0 0-.027-.745c-.157-.238-.363-.351-.633-.347a.921.921 0 0 0-.314.053c-.051.028-1.126.877-2.389 1.887L12 10.04 9.704 8.204c-1.263-1.01-2.329-1.855-2.37-1.876-.118-.064-.422-.087-.566-.044m0 6a.874.874 0 0 0-.287.195.723.723 0 0 0-.127.897c.054.095 4.611 3.788 5.202 4.216a.718.718 0 0 0 .665.119c.219-.075 5.33-4.168 5.438-4.355a.774.774 0 0 0-.027-.745c-.157-.238-.363-.351-.633-.347a.921.921 0 0 0-.314.053c-.051.028-1.126.877-2.389 1.887L12 16.04l-2.296-1.836c-1.263-1.01-2.329-1.855-2.37-1.876-.118-.064-.422-.087-.566-.044'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDirectionDownDouble);
export default ForwardRef;
