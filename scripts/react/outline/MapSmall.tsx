import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMapSmall = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M11.48 2.283A6.753 6.753 0 0 0 6.393 5.26c-.967 1.456-1.341 3.279-1.01 4.918.213 1.056.849 2.463 1.644 3.639.303.448.315.501.107.502a4.113 4.113 0 0 0-.48.103c-.733.189-1.59.677-2.109 1.201-.287.289-1.346 1.56-1.556 1.866a2.694 2.694 0 0 0-.328 2.341c.356 1.066 1.233 1.776 2.338 1.893.445.047 13.557.047 14.002 0 2.055-.217 3.163-2.55 2.011-4.232-.237-.346-1.144-1.434-1.506-1.805a4.735 4.735 0 0 0-1.363-.968c-.384-.181-1.076-.397-1.277-.399-.207-.001-.191-.053.198-.641.71-1.072 1.357-2.529 1.553-3.5.21-1.041.127-2.277-.223-3.318a6.747 6.747 0 0 0-6.914-4.577m1.6 1.576c.61.136 1.33.437 1.813.758a5.993 5.993 0 0 1 1.49 1.49c.193.292.465.851.589 1.213.171.504.234.871.255 1.5.024.694-.043 1.113-.291 1.826-.682 1.966-2.466 4.296-4.024 5.256-.723.446-1.101.446-1.824 0-1.559-.961-3.341-3.289-4.024-5.256-.248-.713-.315-1.132-.291-1.826.021-.629.084-.996.255-1.5.124-.362.396-.921.589-1.213a5.993 5.993 0 0 1 1.49-1.49 5.571 5.571 0 0 1 1.833-.753c.176-.033.356-.069.4-.08.186-.044 1.449.01 1.74.075m-1.42 2.419c-.884.107-1.633.623-2.092 1.442-.4.714-.4 1.846 0 2.56.526.939 1.385 1.451 2.432 1.451s1.906-.512 2.432-1.451c.4-.714.4-1.846 0-2.56-.575-1.026-1.636-1.578-2.772-1.442m.794 1.563c.29.109.596.415.705.705A1.246 1.246 0 0 1 12 10.24c-.508 0-.986-.327-1.163-.795-.109-.288-.094-.741.033-.987.149-.289.479-.572.77-.661.198-.06.592-.039.814.044m-3.655 8.134c.889.862 1.868 1.497 2.601 1.686.144.038.411.067.6.067s.456-.029.6-.067c.733-.189 1.712-.824 2.601-1.686l.221-.215h.531c1.076 0 1.807.286 2.474.967.467.476 1.338 1.553 1.449 1.792.263.564-.008 1.309-.583 1.602l-.193.099H4.9l-.18-.093a1.208 1.208 0 0 1-.562-.58c-.153-.32-.181-.566-.098-.854.084-.286.105-.317.801-1.153.687-.826.875-1.016 1.248-1.262.568-.374 1.073-.51 1.91-.515l.559-.003.221.215'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapSmall);
export default ForwardRef;