import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFormatLineSpacing = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.9 5.259a2.108 2.108 0 0 1-.16.041c-.151.033-2.266 2.121-2.388 2.357a.773.773 0 0 0 .063.759c.212.278.625.386.917.24.07-.035.304-.237.518-.449l.39-.385v8.356l-.39-.387c-.214-.213-.457-.416-.539-.449a.753.753 0 0 0-.896.242.768.768 0 0 0-.062.759c.045.088.564.637 1.174 1.243.908.903 1.12 1.094 1.253 1.13.199.054.241.054.44 0 .133-.036.347-.23 1.273-1.15.612-.608 1.148-1.173 1.19-1.254a.78.78 0 0 0-.118-.846.812.812 0 0 0-.525-.226c-.271 0-.44.103-.87.531l-.41.408V7.822l.39.385c.215.212.448.414.518.449.244.122.603.065.826-.131.219-.192.289-.606.149-.877-.079-.152-2.159-2.246-2.303-2.319-.091-.045-.38-.092-.44-.07'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFormatLineSpacing);
export default ForwardRef;
