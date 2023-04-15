import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRoofHomeRemove = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.672 11.16a.794.794 0 0 0-.535.628c-.051.322.008.407.937 1.342l.864.87-.865.87c-.942.947-.991 1.019-.937 1.379.049.323.404.628.735.63.27.002.415-.108 1.279-.97l.85-.848.85.848c.864.862 1.009.972 1.279.97.331-.002.686-.307.735-.63.054-.36.005-.432-.937-1.379l-.865-.871.867-.869c.477-.479.886-.921.909-.983a.88.88 0 0 0-.15-.801c-.167-.189-.578-.28-.835-.184-.062.023-.504.432-.983.91l-.87.867-.85-.848c-.977-.975-1.093-1.048-1.478-.931'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoofHomeRemove);
export default ForwardRef;
