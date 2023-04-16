import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFontSize = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.807 3.289c-.378.081-.221-.256-2.997 6.416-2.672 6.421-2.606 6.248-2.487 6.562.095.252.398.453.683.453.219 0 .483-.13.593-.292.048-.07.417-.92.82-1.888l.733-1.76h5.696l.733 1.76c.403.968.772 1.818.82 1.888.11.162.374.292.593.292.285 0 .588-.201.683-.453.119-.314.185-.141-2.481-6.544-1.389-3.335-2.567-6.119-2.618-6.187-.161-.215-.466-.313-.771-.247m1.295 5.296 1.091 2.62c.008.02-.957.035-2.193.035-1.236 0-2.201-.015-2.193-.035C4.974 10.769 6.983 6 7 6c.013 0 .509 1.163 1.102 2.585m9.391-1.302a4.641 4.641 0 0 0-1.593.476c-.585.289-.905.527-1.367 1.018-1.285 1.365-1.634 3.289-.915 5.052.237.581.511.978 1.043 1.51.678.678 1.297 1.039 2.166 1.264 1.443.372 3.038.018 4.173-.926l.229-.191.02.373c.015.292.039.404.108.516.351.569 1.22.433 1.359-.213.062-.289.062-8.035 0-8.324a.741.741 0 0 0-1.15-.442c-.221.157-.295.332-.317.747l-.02.374-.204-.172a4.814 4.814 0 0 0-2.569-1.064c-.442-.043-.499-.043-.963.002m1.501 1.633c.533.179.888.399 1.29.8.398.399.618.751.804 1.29.124.359.129.399.129.994s-.005.635-.129.994a3.08 3.08 0 0 1-.804 1.29 3.088 3.088 0 0 1-1.293.809c-.352.119-.402.125-.991.125s-.639-.006-.991-.125a3.088 3.088 0 0 1-1.293-.809A3.064 3.064 0 0 1 14.913 13c-.125-.365-.13-.404-.13-1s.005-.635.13-1c.171-.495.39-.86.737-1.226a3.167 3.167 0 0 1 1.197-.803c.471-.177.685-.209 1.273-.194.433.011.55.03.874.139'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFontSize);
export default ForwardRef;