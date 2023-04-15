import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFileRemove = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.82 6.14a2.274 2.274 0 0 1-.149.037c-.138.03-.375.236-.459.398-.076.147-.083.49-.013.627.027.054.43.48.894.948l.845.849-.865.871c-.949.954-.991 1.017-.935 1.391.023.154.064.225.22.381s.227.197.381.22c.374.056.437.014 1.391-.935l.87-.865.89.885c.838.833.901.887 1.086.925a.751.751 0 0 0 .896-.897c-.038-.184-.092-.247-.925-1.085L13.062 9l.865-.87c.942-.947.991-1.019.937-1.379-.049-.323-.404-.628-.735-.63-.27-.002-.415.108-1.279.97l-.85.848-.85-.845c-.467-.465-.886-.863-.93-.884-.094-.046-.342-.089-.4-.07m6.42 7.922c-1.648.352-2.85 1.562-3.178 3.2-.055.273-.062.634-.053 2.528L13.02 22l4-4 4-4-2.26.003c-1.768.003-2.317.015-2.52.059'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileRemove);
export default ForwardRef;
