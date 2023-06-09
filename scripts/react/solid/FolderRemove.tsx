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
            d='M5.433 3.043a4.302 4.302 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v11.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.401.082.494.083 6.774.083s6.373-.001 6.774-.083c1.517-.309 2.683-1.402 3.098-2.905l.108-.392V9.38l-.106-.385c-.332-1.199-1.077-2.081-2.211-2.619-.708-.335-.778-.344-3.003-.377-2-.029-2.045-.033-2.58-.206-.509-.165-.868-.388-2.066-1.282-1.998-1.491-2.07-1.514-4.709-1.506-.905.003-1.747.02-1.872.038m4.718 7.138c.096.04.451.363.999.91l.85.848.85-.845c.468-.465.895-.868.95-.896.138-.071.515-.064.66.012a.849.849 0 0 1 .342.35c.066.128.066.511 0 .64-.028.055-.431.482-.896.95l-.845.85.828.83c.532.533.85.883.89.979a.755.755 0 0 1-.243.896c-.186.143-.535.178-.74.075-.075-.037-.509-.439-.966-.893l-.829-.825-.871.865c-.892.887-.979.952-1.281.953-.226 0-.521-.194-.639-.42-.076-.146-.083-.523-.012-.66.029-.055.432-.483.896-.95l.844-.851-.847-.849c-.547-.548-.87-.903-.91-.999a.736.736 0 0 1 .97-.97'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderRemove);
export default ForwardRef;
