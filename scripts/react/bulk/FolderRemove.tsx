import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFolderRemove = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13.945 10.139c-.177.046-.274.131-1.069.925l-.875.874-.871-.865c-.954-.949-1.017-.991-1.391-.935-.154.023-.225.064-.381.22s-.197.227-.22.381c-.056.374-.014.437.935 1.391l.865.871-.87.871c-.773.773-.878.894-.93 1.068-.161.536.326 1.048.886.932.185-.038.248-.092 1.086-.925l.89-.885.89.885c.838.833.901.887 1.086.925a.75.75 0 0 0 .887-.535c.032-.113.051-.23.041-.261a3.105 3.105 0 0 1-.043-.176c-.019-.086-.278-.373-.913-1.01l-.886-.891.87-.871c.773-.773.878-.894.93-1.068.167-.554-.347-1.071-.917-.921'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderRemove);
export default ForwardRef;
