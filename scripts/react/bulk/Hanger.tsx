import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHanger = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.551 3.279a2.916 2.916 0 0 0-1.972 1.345c-.301.5-.456 1.284-.322 1.633.135.354.509.561.848.47.381-.102.544-.321.613-.825.065-.478.283-.793.702-1.015.176-.094.246-.107.58-.107.334 0 .404.013.58.107.422.224.66.567.691.995.036.51-.032.644-.849 1.658-.688.853-.939 1.273-1.076 1.796l-.058.224h1.543l.161-.27c.089-.148.415-.585.723-.97.647-.807.806-1.057.953-1.5.093-.278.107-.386.107-.82 0-.434-.014-.543-.106-.82-.293-.885-.969-1.536-1.889-1.818-.314-.097-.929-.138-1.229-.083'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHanger);
export default ForwardRef;
