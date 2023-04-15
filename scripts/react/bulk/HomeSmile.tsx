import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHomeSmile = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.7 15.316c-.392.181-.558.607-.384.984.135.294.323.403 1.304.76 2.606.949 4.331.936 6.9-.048.949-.364 1.108-.472 1.202-.819.123-.457-.271-.953-.757-.953-.047 0-.378.115-.735.256-2.518.992-3.904.987-6.498-.02-.334-.13-.667-.236-.74-.235a.851.851 0 0 0-.292.075'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeSmile);
export default ForwardRef;
