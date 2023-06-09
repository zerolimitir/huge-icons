import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLocationHospital = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.14 2.044c-3.465.325-6.229 2.816-6.975 6.285-.654 3.042.678 6.381 4.04 10.131.822.916 2.484 2.513 2.869 2.756a1.78 1.78 0 0 0 1.853 0c.257-.163 1.271-1.102 2.073-1.921 2.821-2.881 4.433-5.577 4.899-8.195a8.66 8.66 0 0 0 .064-1.96c-.272-2.516-1.671-4.741-3.783-6.016-1.422-.859-3.238-1.248-5.04-1.08m1.461 2.998a5.2 5.2 0 0 1 2.223.839c.174.116.489.384.7.595 2.163 2.164 1.901 5.699-.56 7.546-.559.419-1.333.758-2.064.903-.368.073-1.432.073-1.8 0-.675-.134-1.422-.447-1.945-.814a5.084 5.084 0 0 1-1.638-1.931 4.974 4.974 0 0 1-.337-3.5c.129-.484.503-1.247.814-1.664a5.027 5.027 0 0 1 4.607-1.974m-2.79 2.236a.883.883 0 0 0-.481.374c-.064.117-.071.318-.081 2.259-.008 1.491.002 2.181.034 2.298.151.563.911.722 1.291.271.155-.185.186-.359.186-1.07v-.65h2.48v.65c0 .711.031.885.186 1.07.38.451 1.14.292 1.291-.271.032-.117.042-.807.034-2.298-.011-2.065-.014-2.135-.093-2.27a1.003 1.003 0 0 0-.249-.257c-.14-.099-.205-.117-.409-.117s-.269.018-.409.117c-.304.213-.329.295-.344 1.126l-.013.73h-2.468l-.013-.73c-.012-.649-.022-.745-.095-.869a.807.807 0 0 0-.847-.363'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLocationHospital);
export default ForwardRef;
