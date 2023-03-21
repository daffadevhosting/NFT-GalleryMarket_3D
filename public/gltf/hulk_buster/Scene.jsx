import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/models/gltf/hulk_buster/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-1.51, 0, 0]} scale={0.06}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[1, -0.99, 4.79]} rotation={[-Math.PI / 2, 0, 0]} scale={0.2}>
            <group rotation={[Math.PI / 2, 0, 0]}>
              <group position={[0.74, 5.33, -8.41]}>
                <group rotation={[-Math.PI / 2, 0, 0]}>
                  <group position={[-5.58, 64.98, 191.03]} rotation={[1.68, -0.08, 1.55]}>
                    <group position={[-1.1, -33.4, 15.77]} rotation={[0.49, 0.14, -2.81]}>
                      <group position={[75.27, 0, 0]} rotation={[0.01, 0.31, 0]}>
                        <group position={[86.46, 0, 0]} rotation={[-0.61, -1.13, -0.81]}>
                          <group position={[57.04, 0, 0]} rotation={[0, -0.62, 0]}>
                            <group position={[3.46, -0.16, 24.52]} rotation={[-3.14, 0.86, 0]}>
                              <group position={[-11.07, 65.95, 42.87]} rotation={[0, 0.28, -Math.PI / 2]} scale={[-1, 1, 1]}>
                                <mesh geometry={nodes.Object_16_1.geometry} material={materials.foot} />
                                <mesh geometry={nodes.Object_18_1.geometry} material={materials.Gold_1} />
                              </group>
                            </group>
                            <group position={[41.66, -66.11, 2.15]} rotation={[Math.PI / 2, 1.57, 0]} scale={[-1, 1, 1]}>
                              <mesh geometry={nodes.Object_21_1.geometry} material={materials.foot} />
                              <mesh geometry={nodes.Object_23.geometry} material={materials.iron} />
                            </group>
                          </group>
                          <group position={[7.21, 13.49, -28.37]} rotation={[0, -0.61, 2.88]}>
                            <group position={[-61.38, 118.09, 64.63]} rotation={[-1.57, -0.26, -Math.PI]} scale={[-1, 1, 1]}>
                              <mesh geometry={nodes.Object_27.geometry} material={materials.foot} />
                              <mesh geometry={nodes.Object_29.geometry} material={materials.iron} />
                            </group>
                          </group>
                          <group position={[7.18, -13.22, -28.26]} rotation={[0, -0.62, 0.26]}>
                            <group position={[-1.03, -107.15, 64.63]} rotation={[1.57, 0.26, 0]}>
                              <mesh geometry={nodes.Object_33.geometry} material={materials.foot} />
                              <mesh geometry={nodes.Object_35.geometry} material={materials.iron} />
                            </group>
                          </group>
                          <group position={[-5.91, -116.17, 40.37]} rotation={[1.57, 0, 0.61]} scale={[-1, 1, 1]}>
                            <mesh geometry={nodes.Object_38.geometry} material={materials.foot} />
                            <mesh geometry={nodes.Object_40.geometry} material={materials.Gold_1} />
                            <mesh geometry={nodes.Object_42.geometry} material={materials.iron} />
                          </group>
                        </group>
                        <group position={[0.02, -0.05, -0.34]} rotation={[0, 1.4, -3.13]}>
                          <group position={[50.6, 66.22, 5.84]} rotation={[0, 1.55, -1.57]} scale={0.96}>
                            <mesh geometry={nodes.Object_46.geometry} material={materials.iron} />
                            <mesh geometry={nodes.Object_48.geometry} material={materials.legs_down} />
                          </group>
                        </group>
                        <group position={[105.25, -33.77, 65.77]} rotation={[3.13, -1.46, -1.59]}>
                          <mesh geometry={nodes.Object_51.geometry} material={materials.Gold_1} />
                          <mesh geometry={nodes.Object_53.geometry} material={materials.iron} />
                          <mesh geometry={nodes.Object_55.geometry} material={materials.legs_down} />
                          <mesh geometry={nodes.Object_57.geometry} material={materials.light_3} />
                          <mesh geometry={nodes.Object_59.geometry} material={materials.light} />
                        </group>
                      </group>
                      <group position={[20.91, -66.09, 30]} rotation={[0.02, -0.08, 1.57]} scale={[-1, 1, 1]}>
                        <mesh geometry={nodes.Object_62.geometry} material={materials.Gold_1} />
                        <mesh geometry={nodes.Object_64.geometry} material={materials.Iron_2} />
                        <mesh geometry={nodes.Object_66.geometry} material={materials.iron} />
                        <mesh geometry={nodes.Object_68.geometry} material={materials.Legs} />
                      </group>
                    </group>
                    <group position={[-1.1, 33.4, 15.77]} rotation={[-0.12, 0.45, 2.99]}>
                      <group position={[75.27, 0, 0]} rotation={[-0.02, 0.62, 0.02]}>
                        <group position={[86.46, 0, 0]} rotation={[0.44, -1.18, 0.48]}>
                          <group position={[57.04, 0, 0]} rotation={[0, -0.61, 0]}>
                            <group position={[3.52, 0.05, 24.52]}>
                              <group position={[-11.07, 66.03, 42.84]} rotation={[0, 0.28, -Math.PI / 2]} scale={[-1, 1, 1]}>
                                <mesh geometry={nodes.Object_76.geometry} material={materials.foot} />
                                <mesh geometry={nodes.Object_78.geometry} material={materials.Gold_1} />
                              </group>
                            </group>
                            <group position={[41.7, 66.09, 2.15]} rotation={[1.57, 1.57, 0]}>
                              <mesh geometry={nodes.Object_81.geometry} material={materials.foot} />
                              <mesh geometry={nodes.Object_83.geometry} material={materials.iron} />
                            </group>
                          </group>
                          <group position={[7.26, -13.62, -28.34]} rotation={[0, -0.61, 0.26]}>
                            <group position={[-61.37, 118.16, 64.66]} rotation={[-1.57, -0.26, Math.PI]} scale={[-1, 1, 1]}>
                              <mesh geometry={nodes.Object_87.geometry} material={materials.foot} />
                              <mesh geometry={nodes.Object_89.geometry} material={materials.iron} />
                            </group>
                          </group>
                          <group position={[7.22, 13.1, -28.23]} rotation={[0, -0.61, 2.88]}>
                            <group position={[-0.98, -107.22, 64.64]} rotation={[Math.PI / 2, 0.26, 0]}>
                              <mesh geometry={nodes.Object_93.geometry} material={materials.foot} />
                              <mesh geometry={nodes.Object_95.geometry} material={materials.iron} />
                            </group>
                          </group>
                          <group position={[-5.94, 116.12, 40.38]} rotation={[-1.57, 0, 2.53]}>
                            <mesh geometry={nodes.Object_98.geometry} material={materials.foot} />
                            <mesh geometry={nodes.Object_100.geometry} material={materials.Gold_1} />
                            <mesh geometry={nodes.Object_102.geometry} material={materials.iron} />
                          </group>
                        </group>
                        <group position={[0.02, -0.01, -0.34]} rotation={[3.14, -1.08, -3.13]}>
                          <group position={[50.5, 66.23, 5.9]} rotation={[0, 1.55, -Math.PI / 2]} scale={0.96}>
                            <mesh geometry={nodes.Object_106.geometry} material={materials.iron} />
                            <mesh geometry={nodes.Object_108.geometry} material={materials.legs_down} />
                          </group>
                        </group>
                        <group position={[105.25, 33.72, 65.81]} rotation={[-3.13, -1.46, -1.54]} scale={[-1, 1, 1]}>
                          <mesh geometry={nodes.Object_111.geometry} material={materials.Gold_1} />
                          <mesh geometry={nodes.Object_113.geometry} material={materials.iron} />
                          <mesh geometry={nodes.Object_115.geometry} material={materials.legs_down} />
                          <mesh geometry={nodes.Object_117.geometry} material={materials.light_3} />
                          <mesh geometry={nodes.Object_119.geometry} material={materials.light} />
                        </group>
                      </group>
                      <group position={[20.92, 66.09, 30]} rotation={[-0.02, -0.08, 1.57]}>
                        <mesh geometry={nodes.Object_122.geometry} material={materials.Gold_1} />
                        <mesh geometry={nodes.Object_124.geometry} material={materials.Iron_2} />
                        <mesh geometry={nodes.Object_126.geometry} material={materials.iron} />
                        <mesh geometry={nodes.Object_128.geometry} material={materials.Legs} />
                      </group>
                    </group>
                    <group position={[8.08, 0, -0.62]} rotation={[0, -0.07, 0.02]}>
                      <group position={[46.64, 0, 0]} rotation={[-0.02, 0.06, 0.07]}>
                        <group position={[46.64, 0, 0]} rotation={[-0.01, 0.09, 0.02]}>
                          <group position={[-20.45, -5.32, -1.52]} rotation={[0, 0.15, -1.58]}>
                            <group position={[69.31, 0, 0]} rotation={[0.36, 0.02, -1.21]}>
                              <group position={[48.82, 0, 0]} rotation={[0.2, -0.74, 0.09]}>
                                <group position={[66.2, 0, 0]} rotation={[-1.56, -0.18, 0.02]}>
                                  <group position={[6.88, -14.1, -1.86]} rotation={[1.06, -0.33, -1.4]}>
                                    <group position={[8.11, 0, 0]} rotation={[0, 0.42, 0]}>
                                      <group position={[11.1, 0, 0]} rotation={[0, 0.29, 0]}>
                                        <group position={[-66.02, -73.1, 25.99]} rotation={[0.02, 0.53, 2.5]}>
                                          <mesh geometry={nodes.Object_141_1.geometry} material={materials.Object037__0} />
                                          <mesh geometry={nodes.Object_143_1.geometry} material={materials.iron} />
                                        </group>
                                      </group>
                                      <group position={[-49.44, -73.1, 37]} rotation={[0.02, 0.7, 2.49]}>
                                        <mesh geometry={nodes.Object_146_1.geometry} material={materials.Object037__0} />
                                        <mesh geometry={nodes.Object_148.geometry} material={materials.iron} />
                                      </group>
                                    </group>
                                    <mesh geometry={nodes.Object_151.geometry} material={materials.Object037__0} position={[133, 68.29, -101.48]} rotation={[0.89, -0.35, 2.28]} />
                                  </group>
                                  <group position={[22.26, -10.65, 1.49]} rotation={[0.05, 0.32, -0.26]}>
                                    <group position={[12.49, 0, 0]} rotation={[0, 0.83, 0]}>
                                      <group position={[11.38, 0, 0]} rotation={[0, 0.44, 0]}>
                                        <group position={[-92.44, -24.26, -86.21]} rotation={[1.39, 0.06, 2.38]}>
                                          <mesh geometry={nodes.Object_157.geometry} material={materials.Object037__0} />
                                          <mesh geometry={nodes.Object_159.geometry} material={materials.iron} />
                                        </group>
                                      </group>
                                      <group position={[-100.75, -24.24, -58.34]} rotation={[1.41, 0.1, 2.12]}>
                                        <mesh geometry={nodes.Object_162.geometry} material={materials.Object037__0} />
                                        <mesh geometry={nodes.Object_164.geometry} material={materials.iron} />
                                      </group>
                                    </group>
                                    <group position={[-101.1, -24.25, -25.52]} rotation={[1.45, 0.15, 1.81]}>
                                      <mesh geometry={nodes.Object_167.geometry} material={materials.Object037__0} />
                                      <mesh geometry={nodes.Object_169.geometry} material={materials.iron} />
                                    </group>
                                  </group>
                                  <group position={[26.66, 2.23, 0]} rotation={[-0.05, 1.09, 0]}>
                                    <group position={[11.12, 0, 0]} rotation={[0, 0.63, 0]}>
                                      <group position={[12.97, 0, 0]} rotation={[0, 0.46, 0]}>
                                        <group position={[-91.09, -17.94, -98.09]} rotation={[1.56, -0.03, 2.44]}>
                                          <mesh geometry={nodes.Object_175.geometry} material={materials.Object037__0} />
                                          <mesh geometry={nodes.Object_177.geometry} material={materials.iron} />
                                        </group>
                                      </group>
                                      <group position={[-109.75, -17.94, -53.46]} rotation={[1.55, -0.02, 2.03]}>
                                        <mesh geometry={nodes.Object_180.geometry} material={materials.Object037__0} />
                                        <mesh geometry={nodes.Object_182.geometry} material={materials.iron} />
                                      </group>
                                    </group>
                                    <group position={[-107.13, -17.94, -30.31]} rotation={[1.55, -0.02, 1.83]}>
                                      <mesh geometry={nodes.Object_185.geometry} material={materials.Object037__0} />
                                      <mesh geometry={nodes.Object_187.geometry} material={materials.iron} />
                                    </group>
                                  </group>
                                  <group position={[22.8, 16.22, -1.02]} rotation={[-0.37, 1.19, 0.37]}>
                                    <group position={[12.11, 0, 0]} rotation={[0, 0.96, 0]}>
                                      <group position={[10.92, 0, 0]} rotation={[0, 0.39, 0]}>
                                        <group position={[-94.9, -20.45, -90.97]} rotation={[1.68, -0.06, 2.38]}>
                                          <mesh geometry={nodes.Object_193.geometry} material={materials.Object037__0} />
                                          <mesh geometry={nodes.Object_195.geometry} material={materials.iron} />
                                        </group>
                                      </group>
                                      <group position={[-103.84, -20.45, -64.12]} rotation={[1.66, -0.08, 2.12]}>
                                        <mesh geometry={nodes.Object_198.geometry} material={materials.Object037__0} />
                                        <mesh geometry={nodes.Object_200.geometry} material={materials.iron} />
                                      </group>
                                    </group>
                                    <group position={[-106.89, -20.45, -27.06]} rotation={[1.63, -0.1, 1.79]}>
                                      <mesh geometry={nodes.Object_203.geometry} material={materials.Object037__0} />
                                      <mesh geometry={nodes.Object_205.geometry} material={materials.iron} />
                                    </group>
                                  </group>
                                  <group position={[-84.66, -15.59, 3.02]} rotation={[1.5, -0.01, 1.53]}>
                                    <mesh geometry={nodes.Object_208.geometry} material={materials.Object037__0} />
                                    <mesh geometry={nodes.Object_210.geometry} material={materials.iron} />
                                  </group>
                                </group>
                                <group position={[-18.13, 2.22, 17.43]} rotation={[-0.06, 0.01, 1.54]}>
                                  <mesh geometry={nodes.Object_213.geometry} material={materials.forearm} />
                                  <mesh geometry={nodes.Object_215.geometry} material={materials.Gold_4} />
                                  <mesh geometry={nodes.Object_217.geometry} material={materials.iron} />
                                </group>
                              </group>
                              <group position={[-11.14, -16.62, 25.23]} rotation={[0.11, 0.02, 1.58]}>
                                <group position={[-47.73, -16.63, 25.73]}>
                                  <mesh geometry={nodes.Object_221.geometry} material={materials.material} />
                                  <mesh geometry={nodes.Object_223.geometry} material={materials.Gold_1} />
                                  <mesh geometry={nodes.Object_225.geometry} material={materials.iron} />
                                </group>
                                <mesh geometry={nodes.Object_228.geometry} material={materials.Feet} />
                                <mesh geometry={nodes.Object_230.geometry} material={materials.material} />
                                <mesh geometry={nodes.Object_232.geometry} material={materials.Gold_1} />
                                <mesh geometry={nodes.Object_234.geometry} material={materials.iron} />
                              </group>
                            </group>
                            <group position={[54.58, -3.4, 28.43]} rotation={[0.49, 0, 0.09]}>
                              <mesh geometry={nodes.Object_237.geometry} material={materials.foot} />
                              <mesh geometry={nodes.Object_239.geometry} material={materials.iron} />
                            </group>
                          </group>
                          <group position={[-20.45, 5.32, -1.52]} rotation={[0, 0.15, 1.58]}>
                            <group position={[69.31, 0, 0]} rotation={[-0.49, 0.01, 1.15]}>
                              <group position={[48.82, 0, 0]} rotation={[-0.2, -0.71, -0.08]}>
                                <group position={[66.2, 0, 0]} rotation={[1.56, -0.2, -0.02]}>
                                  <group position={[6.88, 14.1, -1.86]} rotation={[-0.97, -0.33, 1.39]}>
                                    <group position={[8.11, 0, 0]} rotation={[0, 0.59, 0]}>
                                      <group position={[11.1, 0, 0]} rotation={[0, 0.25, 0]}>
                                        <group position={[-66.01, 73.11, 25.98]} rotation={[-0.02, 0.53, 0.64]} scale={[-1, 1, 1]}>
                                          <mesh geometry={nodes.Object_249.geometry} material={materials.Object037__0} />
                                          <mesh geometry={nodes.Object_251.geometry} material={materials.iron} />
                                        </group>
                                      </group>
                                      <group position={[-49.43, 73.11, 36.99]} rotation={[-0.02, 0.7, 0.65]} scale={[-1, 1, 1]}>
                                        <mesh geometry={nodes.Object_254.geometry} material={materials.Object037__0} />
                                        <mesh geometry={nodes.Object_256.geometry} material={materials.iron} />
                                      </group>
                                    </group>
                                    <mesh geometry={nodes.Object_259.geometry} material={materials.Object037__0} position={[133.04, -68.24, -101.51]} rotation={[-0.89, -0.35, 0.86]} scale={[-1, 1, 1]} />
                                  </group>
                                  <group position={[22.26, 10.65, 1.49]} rotation={[-0.16, 0.71, 0.24]}>
                                    <group position={[12.49, 0, 0]} rotation={[0, 0.66, 0]}>
                                      <group position={[11.38, 0, 0]} rotation={[0, 0.15, 0]}>
                                        <group position={[-92.43, 24.26, -86.22]} rotation={[-1.39, 0.06, 0.76]} scale={[-1, 1, 1]}>
                                          <mesh geometry={nodes.Object_265.geometry} material={materials.Object037__0} />
                                          <mesh geometry={nodes.Object_267.geometry} material={materials.iron} />
                                        </group>
                                      </group>
                                      <group position={[-100.75, 24.24, -58.35]} rotation={[-1.41, 0.1, 1.03]} scale={[-1, 1, 1]}>
                                        <mesh geometry={nodes.Object_270.geometry} material={materials.Object037__0} />
                                        <mesh geometry={nodes.Object_272.geometry} material={materials.iron} />
                                      </group>
                                    </group>
                                    <group position={[-101.1, 24.25, -25.54]} rotation={[-1.45, 0.15, 1.33]} scale={[-1, 1, 1]}>
                                      <mesh geometry={nodes.Object_275.geometry} material={materials.Object037__0} />
                                      <mesh geometry={nodes.Object_277.geometry} material={materials.iron} />
                                    </group>
                                  </group>
                                  <group position={[26.66, -2.23, 0]} rotation={[0.05, 1.05, 0]}>
                                    <group position={[11.12, 0, 0]} rotation={[0, 0.69, 0]}>
                                      <group position={[12.97, 0, 0]} rotation={[0, 0.82, 0]}>
                                        <group position={[-91.07, 17.95, -98.09]} rotation={[-1.56, -0.03, 0.7]} scale={[-1, 1, 1]}>
                                          <mesh geometry={nodes.Object_283.geometry} material={materials.Object037__0} />
                                          <mesh geometry={nodes.Object_285.geometry} material={materials.iron} />
                                        </group>
                                      </group>
                                      <group position={[-109.74, 17.94, -53.47]} rotation={[-1.55, -0.02, 1.11]} scale={[-1, 1, 1]}>
                                        <mesh geometry={nodes.Object_288.geometry} material={materials.Object037__0} />
                                        <mesh geometry={nodes.Object_290.geometry} material={materials.iron} />
                                      </group>
                                    </group>
                                    <group position={[-107.13, 17.94, -30.33]} rotation={[-1.55, -0.02, 1.31]} scale={[-1, 1, 1]}>
                                      <mesh geometry={nodes.Object_293.geometry} material={materials.Object037__0} />
                                      <mesh geometry={nodes.Object_295.geometry} material={materials.iron} />
                                    </group>
                                  </group>
                                  <group position={[22.8, -16.22, -1.02]} rotation={[0.29, 1.04, -0.21]}>
                                    <group position={[12.11, 0, 0]} rotation={[0, 0.73, 0]}>
                                      <group position={[10.92, 0, 0]} rotation={[0, 1.11, 0]}>
                                        <group position={[-94.89, 20.45, -90.98]} rotation={[-1.68, -0.06, 0.76]} scale={[-1, 1, 1]}>
                                          <mesh geometry={nodes.Object_301.geometry} material={materials.Object037__0} />
                                          <mesh geometry={nodes.Object_303.geometry} material={materials.iron} />
                                        </group>
                                      </group>
                                      <group position={[-103.83, 20.45, -64.13]} rotation={[-1.66, -0.08, 1.02]} scale={[-1, 1, 1]}>
                                        <mesh geometry={nodes.Object_306.geometry} material={materials.Object037__0} />
                                        <mesh geometry={nodes.Object_308.geometry} material={materials.iron} />
                                      </group>
                                    </group>
                                    <group position={[-106.89, 20.45, -27.07]} rotation={[-1.63, -0.1, 1.35]} scale={[-1, 1, 1]}>
                                      <mesh geometry={nodes.Object_311.geometry} material={materials.Object037__0} />
                                      <mesh geometry={nodes.Object_313.geometry} material={materials.iron} />
                                    </group>
                                  </group>
                                  <group position={[-84.67, 15.59, 3.01]} rotation={[-1.5, -0.01, 1.61]} scale={[-1, 1, 1]}>
                                    <mesh geometry={nodes.Object_316.geometry} material={materials.Object037__0} />
                                    <mesh geometry={nodes.Object_318.geometry} material={materials.iron} />
                                  </group>
                                </group>
                                <group position={[-18.13, -2.21, 17.43]} rotation={[0.06, 0.01, 1.6]} scale={[-1, 1, 1]}>
                                  <mesh geometry={nodes.Object_321.geometry} material={materials.forearm} />
                                  <mesh geometry={nodes.Object_323.geometry} material={materials.Gold_4} />
                                  <mesh geometry={nodes.Object_325.geometry} material={materials.iron} />
                                </group>
                              </group>
                              <group position={[-11.14, 16.63, 25.23]} rotation={[-0.11, 0.02, 1.57]} scale={[-1, 1, 1]}>
                                <group position={[-47.73, -16.63, 25.73]}>
                                  <mesh geometry={nodes.Object_329.geometry} material={materials.material} />
                                  <mesh geometry={nodes.Object_331.geometry} material={materials.Gold_1} />
                                  <mesh geometry={nodes.Object_333.geometry} material={materials.iron} />
                                </group>
                                <mesh geometry={nodes.Object_336.geometry} material={materials.Feet} position={[1.48, -0.77, -3.62]} rotation={[0.01, 0.06, -0.01]} />
                                <mesh geometry={nodes.Object_338.geometry} material={materials.material} />
                                <mesh geometry={nodes.Object_340.geometry} material={materials.Gold_1} />
                                <mesh geometry={nodes.Object_342.geometry} material={materials.iron} />
                              </group>
                            </group>
                            <group position={[54.57, 3.4, 28.43]} rotation={[-0.49, 0, 3.05]} scale={[-1, 1, 1]}>
                              <mesh geometry={nodes.Object_345.geometry} material={materials.foot} />
                              <mesh geometry={nodes.Object_347.geometry} material={materials.iron} />
                            </group>
                          </group>
                          <group position={[-1.81, 0, 8.99]} rotation={[-0.09, -0.48, -0.07]}>
                            <group position={[7.02, 0, 0]} rotation={[-0.16, 0.08, 0.05]}>
                              <group position={[8.09, 0, 0]} rotation={[-0.02, -0.44, -0.07]}>
                                <group position={[-244.58, -2.53, 225.83]} rotation={[-Math.PI, 0.9, Math.PI / 2]} scale={1.12}>
                                  <mesh geometry={nodes.Object_354.geometry} material={materials.Feet} />
                                  <mesh geometry={nodes.Object_357.geometry} material={materials.Feet} />
                                  <mesh geometry={nodes.Object_359.geometry} material={materials.Object037__0} />
                                  <mesh geometry={nodes.Object_361.geometry} material={materials.Face} />
                                  <mesh geometry={nodes.Object_363.geometry} material={materials.light_2} />
                                </group>
                              </group>
                            </group>
                          </group>
                          <group position={[-26.29, -15.71, 49.06]} rotation={[0, 0, -Math.PI / 2]}>
                            <mesh geometry={nodes.Object_367.geometry} material={materials.Feet} position={[-15.7, 3.8, -48.47]} rotation={[-1.4, 0, 0]} />
                            <mesh geometry={nodes.Object_370.geometry} material={materials.Gold_2} />
                            <mesh geometry={nodes.Object_372.geometry} material={materials.Gold_1} />
                            <mesh geometry={nodes.Object_374.geometry} material={materials.iron} />
                            <mesh geometry={nodes.Object_376.geometry} material={materials.light_3} />
                            <mesh geometry={nodes.Object_378.geometry} material={materials.Torsi} />
                            <group position={[-27.61, 0.02, -18.25]} rotation={[-1.78, 0.2, 0.13]} scale={[-1, 1, 1]}>
                              <mesh geometry={nodes.Object_383.geometry} material={materials.iron} position={[0, 0, 7.75]} />
                              <mesh geometry={nodes.Object_385.geometry} material={materials.iron} />
                            </group>
                            <group position={[-34.75, 6.16, -25.21]} rotation={[-1.81, 0.25, 0.02]} scale={[-1, 1, 1]}>
                              <mesh geometry={nodes.Object_390.geometry} material={materials.iron} position={[0, 0, 7.75]} />
                              <mesh geometry={nodes.Object_392.geometry} material={materials.Iron_2} />
                            </group>
                            <group position={[-3.75, 0.02, -18.25]} rotation={[-1.75, -0.34, 0.47]}>
                              <mesh geometry={nodes.Object_397.geometry} material={materials.iron} position={[0, 0, 7.75]} />
                              <mesh geometry={nodes.Object_399.geometry} material={materials.Iron_2} />
                            </group>
                            <group position={[3.16, 6.16, -25.21]} rotation={[-1.71, -0.3, 0.53]}>
                              <mesh geometry={nodes.Object_404.geometry} material={materials.iron} position={[0, 0, 7.75]} />
                              <mesh geometry={nodes.Object_406.geometry} material={materials.iron} />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group position={[50.92, -4.6, 57.99]} rotation={[0, 0.08, -Math.PI / 2]}>
                        <mesh geometry={nodes.Object_410.geometry} material={materials.iron} position={[-4.59, 6.38, -7.6]} />
                        <mesh geometry={nodes.Object_413.geometry} material={materials.Feet} />
                        <mesh geometry={nodes.Object_415.geometry} material={materials.light} />
                        <mesh geometry={nodes.Object_418.geometry} material={materials.iron} />
                        <mesh geometry={nodes.Object_420.geometry} material={materials.Gold_1} />
                        <mesh geometry={nodes.Object_422.geometry} material={materials.iron} />
                        <mesh geometry={nodes.Object_424.geometry} material={materials.Pelvis} />
                      </group>
                    </group>
                    <group position={[53.86, -4.6, 61.51]} rotation={[0, 0, -Math.PI / 2]}>
                      <mesh geometry={nodes.Object_427.geometry} material={materials.Gold_1} />
                      <mesh geometry={nodes.Object_429.geometry} material={materials.iron} />
                      <mesh geometry={nodes.Object_431.geometry} material={materials.Pelvis} />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/gltf/hulk_buster/scene.gltf')
