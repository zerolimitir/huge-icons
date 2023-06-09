import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTrolleyCrooked = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3.02 4.042c-.293.04-1.26.295-1.411.373-.457.237-.494.924-.066 1.25.225.171.455.171 1.104-.001.606-.161.808-.175 1.094-.077.246.083.542.372.631.615.036.098.68 2.437 1.43 5.198.75 2.761 1.37 5.026 1.378 5.033.007.008.164-.06.347-.15.304-.15.758-.281.983-.282.049-.001.09-.008.09-.016 0-.064-2.771-10.175-2.836-10.347-.241-.641-.815-1.2-1.494-1.456-.212-.08-.889-.201-.99-.177-.011.003-.128.02-.26.037m10.559 1.853c-.568.152-.97.282-1.048.337a.75.75 0 0 0-.142 1.092c.124.147.378.274.551.275.214.001 2.053-.504 2.2-.604a.861.861 0 0 0 .318-.502c.056-.263-.124-.626-.383-.771-.23-.129-.476-.101-1.496.173m8.281 9.053c-1.427.369-10.79 2.849-10.802 2.86-.009.01.002.079.024.155.062.212.05.866-.021 1.133a1.179 1.179 0 0 0-.051.248c.011.01 10.59-2.768 11.14-2.926a1.12 1.12 0 0 0 .356-.188c.488-.429.245-1.196-.406-1.281a.83.83 0 0 0-.24-.001'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrolleyCrooked);
export default ForwardRef;
