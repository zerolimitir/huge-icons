import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSpeakerDisable = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3.7 3.355a.61.61 0 0 0-.358.375.746.746 0 0 0-.001.581c.043.102.618.706 1.83 1.919L6.94 8h-.582c-.895 0-1.301.137-1.762.597a1.976 1.976 0 0 0-.552.995c-.061.292-.061 4.524 0 4.816.114.546.562 1.135 1.036 1.364.442.212.582.228 2.063.228 1.421 0 1.638.018 1.987.168.124.053 1.163.804 2.53 1.827 1.275.956 2.409 1.778 2.52 1.826.771.34 1.616.18 2.224-.42a1.92 1.92 0 0 0 .561-1.053l.05-.273 1.282 1.281c.861.86 1.332 1.301 1.432 1.343.586.242 1.184-.315.991-.924-.04-.128-1.482-1.59-8.134-8.249C6.948 5.882 4.452 3.409 4.34 3.357a.758.758 0 0 0-.64-.002'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpeakerDisable);
export default ForwardRef;
