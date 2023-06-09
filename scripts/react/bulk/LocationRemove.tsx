import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLocationRemove = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.14 6.063c-1.123.198-2.115.762-2.913 1.657-1.638 1.834-1.638 4.726 0 6.56C9.237 15.413 10.526 16 12 16c1.355 0 2.555-.498 3.527-1.464A4.883 4.883 0 0 0 17 11a4.873 4.873 0 0 0-1.468-3.529c-.622-.616-1.174-.962-1.952-1.222-.725-.242-1.698-.316-2.44-.186m-.248 2.841c.07.035.348.282.618.549l.49.486.49-.486c.27-.267.548-.514.618-.549.254-.127.673-.048.857.162.196.223.253.582.131.826-.035.07-.282.348-.549.618l-.486.49.466.47c.256.258.494.528.529.598.094.188.082.508-.026.7-.168.3-.591.443-.929.313-.065-.025-.34-.265-.611-.532l-.491-.486-.47.464c-.258.256-.53.495-.604.533-.328.164-.778.024-.959-.298a.85.85 0 0 1-.046-.662c.025-.065.264-.339.531-.61l.486-.491-.484-.49c-.267-.269-.514-.547-.549-.617-.127-.254-.048-.674.162-.857.224-.196.582-.253.826-.131'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLocationRemove);
export default ForwardRef;
