import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBookMarked = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.503 2.042c-1.013.17-1.947.934-2.301 1.883-.206.552-.201.376-.201 6.245L4 15.639l.277-.214c.323-.25.889-.551 1.296-.69.652-.222.397-.215 7.692-.215H20V9.618c0-5.359.007-5.177-.234-5.769a2.99 2.99 0 0 0-1.47-1.537c-.572-.275-.617-.282-2.026-.301l-1.269-.018-.011 2.997-.01 2.997-1.49-1.093L12 5.801l-1.49 1.093-1.49 1.093-.01-2.993L8.999 2l-1.149.005c-.633.002-1.239.019-1.347.037m0 14c-.659.111-1.345.506-1.8 1.038-.716.837-.897 2.02-.469 3.071a3.046 3.046 0 0 0 1.615 1.615c.595.242.372.234 6.151.234 5.777 0 5.556.008 6.15-.233a3.08 3.08 0 0 0 1.617-1.617c.216-.53.233-.718.233-2.508V16l-6.65.005c-3.657.002-6.739.019-6.847.037'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookMarked);
export default ForwardRef;
