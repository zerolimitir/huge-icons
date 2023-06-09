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
            d='M5.9 5.259a2.108 2.108 0 0 1-.16.041c-.151.033-2.266 2.121-2.388 2.357a.773.773 0 0 0 .063.759c.212.278.625.386.917.24.07-.035.304-.237.518-.449l.39-.385v8.357l-.41-.408c-.229-.228-.476-.435-.559-.469a.734.734 0 0 0-1.031.678c0 .103.034.248.077.332.042.081.578.646 1.19 1.254.926.92 1.14 1.114 1.273 1.15.199.054.241.054.44 0 .133-.036.345-.227 1.253-1.13.601-.597 1.128-1.153 1.17-1.234a.78.78 0 0 0-.118-.846c-.184-.21-.603-.289-.857-.162-.07.035-.303.237-.518.449l-.39.385V7.822l.39.385c.215.212.448.414.518.449.244.122.603.065.826-.131.219-.192.289-.606.149-.877-.079-.152-2.159-2.246-2.303-2.319-.091-.045-.38-.092-.44-.07m5.911 1.019a.765.765 0 0 0-.551.607c-.063.335.19.739.521.83.224.063 8.214.063 8.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-4.143-.006c-2.279-.004-4.201.007-4.272.024m0 5a.765.765 0 0 0-.551.607c-.063.335.19.739.521.83.224.063 8.214.063 8.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-4.143-.006c-2.279-.004-4.201.007-4.272.024m0 5a.765.765 0 0 0-.551.607c-.063.335.19.739.521.83.224.063 8.214.063 8.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-4.143-.006c-2.279-.004-4.201.007-4.272.024'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFormatLineSpacing);
export default ForwardRef;
