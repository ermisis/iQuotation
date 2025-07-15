-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 11, 2020 at 04:22 AM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `datatable`
--

-- --------------------------------------------------------

--
-- Table structure for table `combo_eng`
--

CREATE TABLE `combo_eng` (
  `id` int(11) NOT NULL,
  `combo_name` varchar(150) NOT NULL,
  `underwriter_comb` varchar(256) NOT NULL,
  `insured_comb` varchar(256) NOT NULL,
  `industry_comb` varchar(256) NOT NULL,
  `intermediary_comb` varchar(256) NOT NULL,
  `selectCurrency_comb` varchar(256) NOT NULL,
  `building_si` varchar(256) NOT NULL,
  `building_rate` varchar(256) NOT NULL,
  `building_prem` varchar(256) NOT NULL,
  `fencewall_si` varchar(256) NOT NULL,
  `fencewall_rate` varchar(256) NOT NULL,
  `fencewall_prem` varchar(256) NOT NULL,
  `finshed_goods_si` varchar(256) NOT NULL,
  `finshed_goods_rate` varchar(256) NOT NULL,
  `finshed_goods_prem` varchar(256) NOT NULL,
  `wrknprogres_si` varchar(256) NOT NULL,
  `wrknprogres_rate` varchar(256) NOT NULL,
  `wrknprogres_prem` varchar(256) NOT NULL,
  `fff_si` varchar(256) NOT NULL,
  `fff_rate` varchar(256) NOT NULL,
  `fff_prem` varchar(256) NOT NULL,
  `furnish_si` varchar(256) NOT NULL,
  `furnish_rate` varchar(256) NOT NULL,
  `furnish_prem` varchar(256) NOT NULL,
  `eea_si` varchar(256) NOT NULL,
  `eea_rate` varchar(256) NOT NULL,
  `eea_prem` varchar(256) NOT NULL,
  `hg_si` varchar(256) NOT NULL,
  `hg_rate` varchar(256) NOT NULL,
  `hg_prem` varchar(256) NOT NULL,
  `pe_combo_si` varchar(256) NOT NULL,
  `pe_combo_rate` varchar(256) NOT NULL,
  `pe_combo_prem` varchar(256) NOT NULL,
  `cl_si` varchar(256) NOT NULL,
  `cl_rate` varchar(256) NOT NULL,
  `cl_prem` varchar(256) NOT NULL,
  `pm_si` varchar(256) NOT NULL,
  `pm_rate` varchar(256) NOT NULL,
  `pm_prem` varchar(256) NOT NULL,
  `sit_si` varchar(256) NOT NULL,
  `sit_rate` varchar(256) NOT NULL,
  `sit_prem` varchar(256) NOT NULL,
  `oc_si` varchar(256) NOT NULL,
  `oc_rate` varchar(256) NOT NULL,
  `oc_prem` varchar(256) NOT NULL,
  `tsibp_si` varchar(256) NOT NULL,
  `tsibp_rate` varchar(256) NOT NULL,
  `tsibp_prem` varchar(256) NOT NULL,
  `less_si` varchar(256) NOT NULL,
  `less_rate` varchar(256) NOT NULL,
  `less_prem` varchar(256) NOT NULL,
  `fea_dscut_si` varchar(256) NOT NULL,
  `fea_dscut_rate` varchar(256) NOT NULL,
  `fea_dscut_prem` varchar(256) NOT NULL,
  `fea_dscut_si2` varchar(256) NOT NULL,
  `fea_dscut_rate2` varchar(256) NOT NULL,
  `fea_dscut_prem2` varchar(256) NOT NULL,
  `hd_si` varchar(256) NOT NULL,
  `hd_rate` varchar(256) NOT NULL,
  `hd_prem` varchar(256) NOT NULL,
  `hd2_si` varchar(256) NOT NULL,
  `hd2_rate` varchar(256) NOT NULL,
  `hd2_prem` varchar(256) NOT NULL,
  `ltad_si` varchar(256) NOT NULL,
  `ltad_rate` varchar(256) NOT NULL,
  `ltad_prem` varchar(256) NOT NULL,
  `dp_si` varchar(256) NOT NULL,
  `dp_rate` varchar(256) NOT NULL,
  `dp_prem` varchar(256) NOT NULL,
  `special_disc_desc` varchar(256) NOT NULL,
  `special_disc_si` varchar(256) NOT NULL,
  `special_disc_rate` varchar(256) NOT NULL,
  `special_disc_prem` varchar(256) NOT NULL,
  `ca_limits` varchar(256) NOT NULL,
  `ca_rate` varchar(256) NOT NULL,
  `ca_adp` varchar(256) NOT NULL,
  `tr_limits` varchar(256) NOT NULL,
  `tr_rate` varchar(256) NOT NULL,
  `tr_adp` varchar(256) NOT NULL,
  `rob_limits` varchar(256) NOT NULL,
  `rob_rate` varchar(256) NOT NULL,
  `rob_adp` varchar(256) NOT NULL,
  `pf_limits` varchar(256) NOT NULL,
  `pf_rate` varchar(256) NOT NULL,
  `pf_adp` varchar(256) NOT NULL,
  `rvc_limits` varchar(256) NOT NULL,
  `rvc_rate` varchar(256) NOT NULL,
  `rvc_adp` varchar(256) NOT NULL,
  `pg_limits` varchar(256) NOT NULL,
  `pg_rate` varchar(256) NOT NULL,
  `pg_adp` varchar(256) NOT NULL,
  `arsi_limits` varchar(256) NOT NULL,
  `arsi_rate` varchar(256) NOT NULL,
  `arsi_adp` varchar(256) NOT NULL,
  `sp_limits` varchar(256) NOT NULL,
  `sp_rate` varchar(256) NOT NULL,
  `sp_adp` varchar(256) NOT NULL,
  `theft_limits` varchar(256) NOT NULL,
  `theft_rate` varchar(256) NOT NULL,
  `theft_adp` varchar(256) NOT NULL,
  `combo_desc_eng` varchar(256) NOT NULL,
  `combo_si_eng` varchar(256) NOT NULL,
  `combo_rate_eng` varchar(256) NOT NULL,
  `combo_prem_eng` varchar(256) NOT NULL,
  `combo_desc_eng1` varchar(256) NOT NULL,
  `combo_si_eng1` varchar(256) NOT NULL,
  `combo_rate_eng1` varchar(256) NOT NULL,
  `combo_prem_eng1` varchar(256) NOT NULL,
  `combo_desc_eng2` varchar(256) NOT NULL,
  `combo_si_eng2` varchar(256) NOT NULL,
  `combo_rate_eng2` varchar(256) NOT NULL,
  `combo_prem_eng2` varchar(256) NOT NULL,
  `combo_desc_eng3` varchar(256) NOT NULL,
  `combo_si_eng3` varchar(256) NOT NULL,
  `combo_rate_eng3` varchar(256) NOT NULL,
  `combo_prem_eng3` varchar(256) NOT NULL,
  `combo_desc_eng4` varchar(256) NOT NULL,
  `combo_si_eng4` varchar(256) NOT NULL,
  `combo_rate_eng4` varchar(256) NOT NULL,
  `combo_prem_eng4` varchar(256) NOT NULL,
  `tap_limits` varchar(256) NOT NULL,
  `tap_rate` varchar(256) NOT NULL,
  `tap_adp` varchar(256) NOT NULL,
  `netp_limits` varchar(256) NOT NULL,
  `netp_rate` varchar(256) NOT NULL,
  `netp_adp` varchar(256) NOT NULL,
  `collapse_limits` varchar(256) NOT NULL,
  `collapse_rate` varchar(256) NOT NULL,
  `collapse_adp` varchar(256) NOT NULL,
  `totp_limits` varchar(256) NOT NULL,
  `totp_rate` varchar(256) NOT NULL,
  `totp_adp` varchar(256) NOT NULL,
  `totp2_limits` varchar(256) NOT NULL,
  `totp2_rate` varchar(256) NOT NULL,
  `totp2_adp` varchar(256) NOT NULL,
  `nicl_limits` varchar(256) NOT NULL,
  `nicl_rate` varchar(256) NOT NULL,
  `nicl_adp` varchar(256) NOT NULL,
  `cf_limits` varchar(256) NOT NULL,
  `cf_rate` varchar(256) NOT NULL,
  `cf_adp` varchar(256) NOT NULL,
  `pat_limits` varchar(256) NOT NULL,
  `pat_rate` varchar(256) NOT NULL,
  `pat_adp` varchar(256) NOT NULL,
  `wcds_limits` varchar(256) NOT NULL,
  `wcds_rate` varchar(256) NOT NULL,
  `wcds_adp` varchar(256) NOT NULL,
  `bue_limits` varchar(256) NOT NULL,
  `bue_rate` varchar(256) NOT NULL,
  `bue_adp` varchar(256) NOT NULL,
  `pc_limits` varchar(256) NOT NULL,
  `pc_rate` varchar(256) NOT NULL,
  `pc_adp` varchar(256) NOT NULL,
  `apl_limits` varchar(256) NOT NULL,
  `apl_rate` varchar(256) NOT NULL,
  `apl_adp` varchar(256) NOT NULL,
  `fg_si` varchar(256) NOT NULL,
  `fg_rate` varchar(256) NOT NULL,
  `fg_prem` varchar(256) NOT NULL,
  `wip_si` varchar(256) NOT NULL,
  `wip_rate` varchar(256) NOT NULL,
  `wip_prem` varchar(256) NOT NULL,
  `rm_si` varchar(256) NOT NULL,
  `rm_rate` varchar(256) NOT NULL,
  `rm_prem` varchar(256) NOT NULL,
  `aa_ap_limits` varchar(256) NOT NULL,
  `aa_ap_rate` varchar(256) NOT NULL,
  `aa_ap_adp` varchar(256) NOT NULL,
  `deduc_aat_limits` varchar(256) NOT NULL,
  `subject_aa_limits` varchar(256) NOT NULL,
  `is_deleted` int(11) NOT NULL DEFAULT '0',
  `type_in` varchar(255) DEFAULT NULL,
  `date_input` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `combo_eng`
--

INSERT INTO `combo_eng` (`id`, `combo_name`, `underwriter_comb`, `insured_comb`, `industry_comb`, `intermediary_comb`, `selectCurrency_comb`, `building_si`, `building_rate`, `building_prem`, `fencewall_si`, `fencewall_rate`, `fencewall_prem`, `finshed_goods_si`, `finshed_goods_rate`, `finshed_goods_prem`, `wrknprogres_si`, `wrknprogres_rate`, `wrknprogres_prem`, `fff_si`, `fff_rate`, `fff_prem`, `furnish_si`, `furnish_rate`, `furnish_prem`, `eea_si`, `eea_rate`, `eea_prem`, `hg_si`, `hg_rate`, `hg_prem`, `pe_combo_si`, `pe_combo_rate`, `pe_combo_prem`, `cl_si`, `cl_rate`, `cl_prem`, `pm_si`, `pm_rate`, `pm_prem`, `sit_si`, `sit_rate`, `sit_prem`, `oc_si`, `oc_rate`, `oc_prem`, `tsibp_si`, `tsibp_rate`, `tsibp_prem`, `less_si`, `less_rate`, `less_prem`, `fea_dscut_si`, `fea_dscut_rate`, `fea_dscut_prem`, `fea_dscut_si2`, `fea_dscut_rate2`, `fea_dscut_prem2`, `hd_si`, `hd_rate`, `hd_prem`, `hd2_si`, `hd2_rate`, `hd2_prem`, `ltad_si`, `ltad_rate`, `ltad_prem`, `dp_si`, `dp_rate`, `dp_prem`, `special_disc_desc`, `special_disc_si`, `special_disc_rate`, `special_disc_prem`, `ca_limits`, `ca_rate`, `ca_adp`, `tr_limits`, `tr_rate`, `tr_adp`, `rob_limits`, `rob_rate`, `rob_adp`, `pf_limits`, `pf_rate`, `pf_adp`, `rvc_limits`, `rvc_rate`, `rvc_adp`, `pg_limits`, `pg_rate`, `pg_adp`, `arsi_limits`, `arsi_rate`, `arsi_adp`, `sp_limits`, `sp_rate`, `sp_adp`, `theft_limits`, `theft_rate`, `theft_adp`, `combo_desc_eng`, `combo_si_eng`, `combo_rate_eng`, `combo_prem_eng`, `combo_desc_eng1`, `combo_si_eng1`, `combo_rate_eng1`, `combo_prem_eng1`, `combo_desc_eng2`, `combo_si_eng2`, `combo_rate_eng2`, `combo_prem_eng2`, `combo_desc_eng3`, `combo_si_eng3`, `combo_rate_eng3`, `combo_prem_eng3`, `combo_desc_eng4`, `combo_si_eng4`, `combo_rate_eng4`, `combo_prem_eng4`, `tap_limits`, `tap_rate`, `tap_adp`, `netp_limits`, `netp_rate`, `netp_adp`, `collapse_limits`, `collapse_rate`, `collapse_adp`, `totp_limits`, `totp_rate`, `totp_adp`, `totp2_limits`, `totp2_rate`, `totp2_adp`, `nicl_limits`, `nicl_rate`, `nicl_adp`, `cf_limits`, `cf_rate`, `cf_adp`, `pat_limits`, `pat_rate`, `pat_adp`, `wcds_limits`, `wcds_rate`, `wcds_adp`, `bue_limits`, `bue_rate`, `bue_adp`, `pc_limits`, `pc_rate`, `pc_adp`, `apl_limits`, `apl_rate`, `apl_adp`, `fg_si`, `fg_rate`, `fg_prem`, `wip_si`, `wip_rate`, `wip_prem`, `rm_si`, `rm_rate`, `rm_prem`, `aa_ap_limits`, `aa_ap_rate`, `aa_ap_adp`, `deduc_aat_limits`, `subject_aa_limits`, `is_deleted`, `type_in`, `date_input`) VALUES
(1, 'eng_aar', 'Admin', '', '', '', 'none', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '0', '', '', '', '5.00%', '0', '0', '', '', '0', '5.00%', '0', '0', '0', '0', '0', '10.00%', '0', '0', '0', '0', '0', '', '0%', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '', '0', '0', '0', '', '0', '0', '0', '', '0', '0', '0', '', '0', '0', '0', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '', '', 0, NULL, '2020-08-28'),
(2, 'eng_aar', 'Admin', 'dddddddddddd', 'xxxxxxxxxxxxxxx', 'dwqsc', 'GHC', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '12,000.00', '', '120.00', '', '', '', '5.00%', '0', '6.00', '', '', '114.00', '5.00%', '0', '6.00', '0', '0', '114.00', '10.00%', '0', '12.00', '0', '0', '108.00', 'Special Discount', '5%', '0', '5.40', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', 'd2dq', '1000', '1', '10.00', 'dwqs', '1000', '1', '10.00', 'ewdv', '1000', '1', '10.00', 'feqdacx', '1000', '1', '10.00', 'wsdvc', '1000', '1', '10.00', '0', '0', '130.00', '0', '0', '238.00', '1000', '1', '10.00', '0', '0', '248.00', '', '', '', '0', '0', '2.48', '0', '0', '1000', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1,250.48', 'kjggggjkkkkkkkkkkkkkkkkk', 'kkkkkkkkkkkkkkkkkkkkkkkk', 1, NULL, '2020-08-28'),
(3, 'eng_fap', 'Admin', '', '', '', 'none', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '5.00%', '0', '0', '0', '0', '0', '5.00%', '0', '0', '0', '0', '0', '10.00%', '0', '0', '0', '0', '0', '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '', '0', '0', '0', '', '0', '0', '0', '', '0', '0', '0', '', '0', '0', '0', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '0', '', '', 0, NULL, '2020-08-30'),
(4, 'eng_fap', 'Admin', 'dddddddddddddd', 'ddddddddddddddddd', 'efwe', 'U$D', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', '', '', '', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '10,000.00', '0', '20.00', '0', '0', '0', '5.00%', '0', '1.00', '0', '0', '19.00', '5.00%', '0', '1.00', '0', '0', '19.00', '10.00%', '0', '2.00', '0', '0', '18.00', '', '', '', '', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', '1dfcrd', '1000', '1', '10.00', '1efewd', '1000', '1', '10.00', 'wfdew', '1000', '1', '10.00', 'eefw', '1000', '1', '0.00', '', '1000', '1', '10.00', '0', '0', '120.00', '0', '0', '138.00', '0', '0', '0', '0', '0', '138.00', '0', '0', '0', '0', '0', '1.38', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '139.38', 'brbfd v', 'wfvrfb', 0, NULL, '2020-08-30'),
(5, 'eng_fap', 'Admin', '', '', '', 'none', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1000', '1', '10.00', '1,000.00', '0', '0', '0', '0', '0', '5.00%', '0', '0', '0', '0', '0', '5.00%', '0', '0', '0', '0', '0', '10.00%', '0', '0', '0', '0', '0', '', '', '', '', '1000', '1', '10.00', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '', '0', '0', '0', '', '0', '0', '0', '', '0', '0', '0', '', '0', '0', '0', '', '0', '0', '0', '0', '0', '10.00', '0', '0', '10.00', '1000', '1', '10.00', '0', '0', '20.00', '0', '0', '0', '0', '0', '0.20', '0', '0', '1000', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '1,020.20', '', '', 0, NULL, '2020-08-30'),
(6, 'eng_hi', 'Admin', '', '', '', 'none', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '0', '0', '0', '0', '5.00%', '0', '0', '0', '0', '0', '5.00%', '0', '0', '0', '0', '0', '10.00%', '0', '0', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '0', '', '', '', '', '', '', '', '', '', 'sxzzssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss', '0', '0', '0', 'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss', '0', '0', '0', 'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss', '0', '0', '0', 'sssssssssssssssssssssssssssss', '0', '0', '0', 'sssssssssssssssss', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', '', '', '', '0', '0', '0', '', '', 0, NULL, '2020-08-31'),
(7, 'eng_cfb', 'Admin', '', '', '', 'none', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '5.00%', '0', '0', '0', '0', '0', '5.00%', '0', '0', '0', '0', '0', '10.00%', '0', '0', '0', '0', '0', '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', 'ddddddddddd', '1000', '1', '10.00', 'wevc', '1000', '1', '10.00', 'wevc', '1000', '1', '10.00', '', '', '', '', '', '', '', '', '0', '0', '50.00', '0', '0', '50.00', '0', '0', '0', '0', '0', '50.00', '0', '0', '0', '0', '0', '0.50', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '50.50', 'vefv', 'ddddddddddd', 0, NULL, '2020-08-31'),
(8, 'eng_cfb', 'Admin', 'dfd', 'ddddddddddddd', 'dddddddddddddddddddddddddddddddddd', 'GBP', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', '', '', '', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '0', '0.00', '0', '0', '0', '2,000.00', '0', '80.00', '0', '0', '0', '5.00%', '0', '4.00', '0', '0', '76.00', '5.00%', '0', '4.00', '0', '0', '72.00', '10.00%', '0', '8.00', '0', '0', '64.00', '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', '', '1000', '1', '10.00', '', '1000', '1', '10.00', '', '1000', '1', '10.00', '', '', '', '', '', '', '', '', '0', '0', '50.00', '0', '0', '114.00', '0', '0', '0', '0', '0', '114.00', '0', '0', '0', '0', '0', '1.14', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '115.14', 'dddddddddddddddd', 'ddddddddddddddddddddddd', 0, NULL, '2020-09-01'),
(9, 'eng_cfb', 'Admin', '', '', '', 'none', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '5.00%', '0', '0', '0', '0', '0', '5.00%', '0', '0', '0', '0', '0', '10.00%', '0', '0', '0', '0', '0', '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', 'asdfgh', '1000', '1', '10.00', 'eeeeeeeeeee', '1000', '1', '10.00', 'wefc', '1000', '1', '10.00', 'wdvs', '1000', '1', '10.00', 'eeeeeeeee', '1000', '1', '10.00', '0', '0', '50.00', '0', '0', '50.00', '0', '0', '0', '0', '0', '50.00', '0', '0', '0', '0', '0', '0.50', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '50.50', '', '', 0, NULL, '2020-09-01'),
(10, 'eng_fap', 'Admin', '', '', '', 'none', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '5.00%', '0', '0', '0', '0', '0', '5.00%', '0', '0', '0', '0', '0', '10.00%', '0', '0', '0', '0', '0', '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '', '1000', '1', '10.00', '', '1000', '1', '10.00', '', '1000', '1', '10.00', '', '1000', '1', '10.00', '', '1000', '1', '10.00', '0', '0', '50.00', '0', '0', '50.00', '0', '0', '0', '0', '0', '50.00', '0', '0', '0', '0', '0', '0.50', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '50.50', '', '', 1, NULL, '2020-09-01'),
(11, 'eng_hi', 'Admin', '', '', '', 'none', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '0', '0', '0', '0', '5.00%', '0', '0', '0', '0', '0', '5.00%', '0', '0', '0', '0', '0', '10.00%', '0', '0', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '1000', '1', '10.00', '', '1000', '1', '10.00', '', '1000', '1', '10.00', '', '1000', '1', '10.00', '', '1000', '1', '10.00', '0', '0', '50.00', '0', '0', '50.00', '0', '0', '0', '0', '0', '50.00', '0', '0', '0', '0', '0', '0.50', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', '', '', '', '0', '0', '50.50', 'klihl', 'hlk.', 0, NULL, '2020-09-01'),
(12, 'eng_hi', 'Admin', '', '', '', 'none', '1000', '0', '0', '1000', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1000', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '3,000.00', '0', '0', '0', '0', '0', '5.00%', '0', '0', '0', '0', '0', '5.00%', '0', '0', '0', '0', '0', '10.00%', '0', '0', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '0', '', '', '', '', '', '', '', '', '', 'sssssssssssssssssss', '1000', '1', '10.00', 'wefdsc', '1000', '1', '10.00', 'wfdc', '1000', '1', '10.00', 'wdsxv1', '1000', '1', '10.00', 'erfdsvc', '1000', '1', '10.00', '0', '0', '50.00', '0', '0', '50.00', '1000', '1', '10.00', '0', '0', '60.00', '0', '0', '0', '0', '0', '0.60', '0', '0', '1000', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', '', '', '', '0', '0', '1,060.60', 'klkkkkkkkkkkkkkkkkkk', 'kkkkkkkkkkkkkkkkkkkkk', 1, NULL, '2020-09-01'),
(13, 'eng_cfb', 'Admin', '', '', '', 'none', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', '', '', '', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '13,000.00', '0', '130.00', '0', '0', '0', '5.00%', '0', '6.50', '0', '0', '123.50', '5.00%', '0', '6.50', '0', '0', '117.00', '10.00%', '0', '13.00', '0', '0', '104.00', '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', 'gggggggggg', '1000', '1', '10.00', 'dddddd', '1000', '1', '10.00', 'efwdc', '1000', '1', '10.00', 'vefsdv', '1000', '1', '10.00', 'esrgf', '1000', '1', '10.00', '0', '0', '50.00', '0', '0', '154.00', '1000', '1', '10.00', '0', '0', '164.00', '0', '0', '0', '0', '0', '1.64', '0', '0', '1000', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '0', '0', '1,165.64', '''''''''''''''''''''''''''''''''''''''''''''l;jk', 'ddddddddddddddddddddddd', 1, NULL, '2020-09-01'),
(14, 'eng_fap', 'Admin', 'dkcmwdl', 'jnwjkscn', 'qnsadkn', 'GBP', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', '', '', '', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '11,000.00', '0', '110.00', '0', '0', '0', '5.00%', '0', '5.50', '0', '0', '104.50', '5.00%', '0', '5.50', '0', '0', '104.50', '10.00%', '0', '11.00', '0', '0', '99.00', '', '', '', '', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', 'wqsc', '1000', '1', '10.00', 'efsc', '1000', '1', '10.00', 'wfsc', '1000', '1', '10.00', 'ewfsc', '1000', '1', '10.00', 'rvdx', '1000', '1', '10.00', '0', '0', '130.00', '0', '0', '229.00', '1000', '1', '10.00', '0', '0', '239.00', '0', '0', '0', '0', '0', '2.39', '0', '0', '1000', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '1,241.39', 'dsvkenlkcvn', 'nenfwen', 0, NULL, '2020-09-13'),
(15, 'eng_hi', 'Admin', 'kkmwekmgsv', 'nefdn', 'nknqkfsc', 'U$D', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', '', '', '', '', '', '', '', '', '', '4,000.00', '0', '40.00', '0', '0', '0', '5.00%', '0', '2.00', '0', '0', '38.00', '5.00%', '0', '2.00', '0', '0', '36.00', '10.00%', '0', '4.00', '0', '0', '32.00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1000', '1', '10.00', '', '', '', '', '', '', '', '', '', 'dvsl', '1000', '1', '10.00', 'wdv', '1000', '1', '10.00', 'fsc', '1000', '1', '10.00', 'wedv', '1000', '1', '10.00', 'wev', '1000', '1', '10.00', '0', '0', '110.00', '0', '0', '142.00', '1000', '1', '10.00', '0', '0', '152.00', '0', '0', '0', '0', '0', '1.52', '0', '0', '1000', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', '', '', '', '', '', '', '0', '0', '1,153.52', 'dscv', 'lwsmdv', 0, NULL, '2020-09-13'),
(16, 'eng_cfb', 'Admin', 'snabcxjkb', 'bkjbdv', 'jejdv', 'EUROS', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', '', '', '', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '14,000.00', '0', '140.00', '0', '0', '0', '5.00%', '0', '7.00', '0', '0', '133.00', '5.00%', '0', '7.00', '0', '0', '126.00', '10.00%', '0', '14.00', '0', '0', '112.00', '', '', '', '', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', '', '', '', 'fdsjxbk', '1000', '1', '10.00', 'wdv', '1000', '1', '10.00', 'wefdv', '1000', '1', '10.00', 'wefdc', '1000', '1', '10.00', 'wefdc', '1000', '1', '10.00', '0', '0', '120.00', '0', '0', '232.00', '1000', '1', '10.00', '0', '0', '242.00', '0', '0', '0', '0', '0', '2.42', '0', '0', '1000', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '0', '0', '1,244.42', 'wdsjxbcjk', 'jbefcxbk', 0, NULL, '2020-09-13'),
(17, 'eng_aar', 'Admin', 'aa', 'aaa', 'aaaa', 'GHC', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '12,000.00', '', '120.00', '', '', '', '5.00%', '0', '6.00', '', '', '114.00', '5.00%', '0', '5.70', '0', '0', '108.30', '10.00%', '0', '10.83', '0', '0', '97.47', '', '0.5%', '0', '0.49', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', 'wqfsc', '1000', '1', '10.00', 'd', '1000', '1', '10.00', 'd', '1000', '1', '10.00', 'ff', '1000', '1', '10.00', 'f', '1000', '1', '10.00', '0', '0', '130.00', '0', '0', '227.47', '1000', '1', '10.00', '0', '0', '237.47', '', '', '', '0', '0', '2.37', '0', '0', '1000', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1,239.84', 'ddddddddddddddddddddddddddddddd', 'w', 0, NULL, '2020-10-07');

-- --------------------------------------------------------

--
-- Table structure for table `config_combo`
--

CREATE TABLE `config_combo` (
  `id` int(11) NOT NULL,
  `fea_dscut_si` varchar(150) NOT NULL DEFAULT '5.00%',
  `hd_si` varchar(150) NOT NULL DEFAULT '5.00%',
  `ltad_si` varchar(150) NOT NULL DEFAULT '10.00%',
  `fea_dscut_si2` varchar(150) NOT NULL DEFAULT '5.00%',
  `hd_si2` varchar(150) NOT NULL DEFAULT '5.00%',
  `ltad_si2` varchar(150) NOT NULL DEFAULT '10.00%',
  `fea_dscut_si3` varchar(150) NOT NULL DEFAULT '5.00%',
  `hd_si3` varchar(150) NOT NULL DEFAULT '5.00%',
  `ltad_si3` varchar(150) NOT NULL DEFAULT '10.00%',
  `fea_dscut_si4` varchar(150) NOT NULL DEFAULT '5.00%',
  `hd_si4` varchar(150) NOT NULL DEFAULT '5.00%',
  `ltad_si4` varchar(150) NOT NULL DEFAULT '10.00%'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `config_combo`
--

INSERT INTO `config_combo` (`id`, `fea_dscut_si`, `hd_si`, `ltad_si`, `fea_dscut_si2`, `hd_si2`, `ltad_si2`, `fea_dscut_si3`, `hd_si3`, `ltad_si3`, `fea_dscut_si4`, `hd_si4`, `ltad_si4`) VALUES
(1, '5.00%', '5.00%', '10.00%', '5.00%', '5.00%', '10.00%', '5.00%', '5.00%', '10.00%', '5.00%', '5.00%', '10.00%');

-- --------------------------------------------------------

--
-- Table structure for table `config_gpa`
--

CREATE TABLE `config_gpa` (
  `id` int(11) NOT NULL,
  `death_as` varchar(150) NOT NULL DEFAULT '0.00',
  `pd_terms` varchar(150) NOT NULL DEFAULT '0.00',
  `td_terms` varchar(150) NOT NULL,
  `me_terms` varchar(150) NOT NULL DEFAULT '0.00',
  `death2_as` varchar(150) NOT NULL DEFAULT '0.00',
  `pd2_terms` varchar(150) NOT NULL DEFAULT '0.00',
  `td2_terms` varchar(255) NOT NULL,
  `me2_terms` varchar(150) NOT NULL DEFAULT '0.00',
  `death4_as` varchar(150) NOT NULL DEFAULT '0.00',
  `pd4_terms` varchar(150) NOT NULL DEFAULT '0.00',
  `td4_terms` varchar(255) NOT NULL,
  `me4_terms` varchar(150) NOT NULL DEFAULT '0.00',
  `death5_as` varchar(150) NOT NULL DEFAULT '0.00',
  `pd5_terms` varchar(150) NOT NULL DEFAULT '0.00',
  `td5_terms` varchar(255) NOT NULL,
  `me5_terms` varchar(150) NOT NULL DEFAULT '0.00',
  `gd4gpa_rate` varchar(150) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `config_gpa`
--

INSERT INTO `config_gpa` (`id`, `death_as`, `pd_terms`, `td_terms`, `me_terms`, `death2_as`, `pd2_terms`, `td2_terms`, `me2_terms`, `death4_as`, `pd4_terms`, `td4_terms`, `me4_terms`, `death5_as`, `pd5_terms`, `td5_terms`, `me5_terms`, `gd4gpa_rate`) VALUES
(1, '100.00', '100.00', '1/52 * Annual Salary', '2.00', '100.00', '100.00', '1/52 * Annual Salary', '2.00', '100.00', '100.00', '1/52 * Annual Salary', '2.00', '100.00', '100.00', '1/52 * Annual Salary', '2.00', '10.00');

-- --------------------------------------------------------

--
-- Table structure for table `config_quote`
--

CREATE TABLE `config_quote` (
  `id` int(11) NOT NULL,
  `rate` int(11) NOT NULL DEFAULT '0',
  `tp_prem` int(11) NOT NULL DEFAULT '0',
  `ccl` int(11) NOT NULL DEFAULT '0',
  `cc_load` int(11) NOT NULL DEFAULT '0',
  `ncd` int(11) DEFAULT '0',
  `fd` int(11) NOT NULL DEFAULT '0',
  `addl_per` int(11) NOT NULL DEFAULT '0',
  `eco_peril` int(11) NOT NULL DEFAULT '0',
  `pa` int(11) NOT NULL DEFAULT '0',
  `pl` int(11) NOT NULL DEFAULT '0',
  `exit_load_val_1` int(11) NOT NULL DEFAULT '0',
  `exit_load_val_2` int(11) NOT NULL DEFAULT '0',
  `tppdl_val_1` int(11) NOT NULL DEFAULT '0',
  `tppdl_val_2` int(11) NOT NULL DEFAULT '0',
  `tppdl_val_per` int(11) NOT NULL DEFAULT '0',
  `levis` int(11) NOT NULL DEFAULT '0',
  `eib` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `config_quote`
--

INSERT INTO `config_quote` (`id`, `rate`, `tp_prem`, `ccl`, `cc_load`, `ncd`, `fd`, `addl_per`, `eco_peril`, `pa`, `pl`, `exit_load_val_1`, `exit_load_val_2`, `tppdl_val_1`, `tppdl_val_2`, `tppdl_val_per`, `levis`, `eib`) VALUES
(1, 7, 0, 0, 0, 50, 0, 5, 5, 0, 0, 8, 5, 40000, 2000, 2, 0, 10);

-- --------------------------------------------------------

--
-- Table structure for table `config_wc`
--

CREATE TABLE `config_wc` (
  `id` int(11) NOT NULL,
  `mel_rate` varchar(150) NOT NULL DEFAULT '0.00',
  `cll_rate` varchar(150) NOT NULL DEFAULT '0.00',
  `tfw_rate` varchar(150) NOT NULL DEFAULT '0.00',
  `gd_rate` varchar(150) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `config_wc`
--

INSERT INTO `config_wc` (`id`, `mel_rate`, `cll_rate`, `tfw_rate`, `gd_rate`) VALUES
(1, '33.33%', '15.00%', '10.00%', '5.00%');

-- --------------------------------------------------------

--
-- Table structure for table `eng_bbb`
--

CREATE TABLE `eng_bbb` (
  `id` int(11) NOT NULL,
  `eng_bbb` varchar(150) NOT NULL,
  `underwriter_bbb` varchar(256) NOT NULL,
  `insured_bbb` varchar(256) NOT NULL,
  `industry_bbb` varchar(256) NOT NULL,
  `intermediary_bbb` varchar(256) NOT NULL,
  `selectCurrency_bbb` varchar(256) NOT NULL,
  `sob_limits` varchar(256) NOT NULL,
  `sob_rate` varchar(256) NOT NULL,
  `sob_prem` varchar(256) NOT NULL,
  `s2cc_limits` varchar(256) NOT NULL,
  `s2cc_rate` varchar(256) NOT NULL,
  `s2cc_prem` varchar(256) NOT NULL,
  `s3pi_limits` varchar(256) NOT NULL,
  `s3pi_rate` varchar(256) NOT NULL,
  `s3pi_prem` varchar(256) NOT NULL,
  `s3pi_limits2` varchar(256) NOT NULL,
  `s3pi_rate2` varchar(256) NOT NULL,
  `s3pi_prem2` varchar(256) NOT NULL,
  `peril_limits` varchar(256) NOT NULL,
  `peril_rate` varchar(256) NOT NULL,
  `peril_prem` varchar(256) NOT NULL,
  `aloi_limits` varchar(256) NOT NULL,
  `aloi_rate` varchar(256) NOT NULL,
  `aloi_prem` varchar(256) NOT NULL,
  `other_desc_bbb` varchar(256) NOT NULL,
  `other_limit_bbb` varchar(256) NOT NULL,
  `other_rate_bbb` varchar(256) NOT NULL,
  `other_prem_bbb` varchar(256) NOT NULL,
  `other_desc_bbb1` varchar(256) NOT NULL,
  `other_limit_bbb1` varchar(256) NOT NULL,
  `other_rate_bbb1` varchar(256) NOT NULL,
  `other_prem_bbb1` varchar(256) NOT NULL,
  `other_desc_bbb2` varchar(256) NOT NULL,
  `other_limit_bbb2` varchar(256) NOT NULL,
  `other_rate_bbb2` varchar(256) NOT NULL,
  `other_prem_bbb2` varchar(256) NOT NULL,
  `other_desc_bbb3` varchar(256) NOT NULL,
  `other_limit_bbb3` varchar(256) NOT NULL,
  `other_rate_bbb3` varchar(256) NOT NULL,
  `other_prem_bbb3` varchar(256) NOT NULL,
  `other_desc_bbb4` varchar(256) NOT NULL,
  `other_limit_bbb4` varchar(256) NOT NULL,
  `other_rate_bbb4` varchar(256) NOT NULL,
  `other_prem_bbb4` varchar(256) NOT NULL,
  `apremm_limits` varchar(256) NOT NULL,
  `apremm_rate` varchar(256) NOT NULL,
  `apremm_prem` varchar(256) NOT NULL,
  `ded_limits` varchar(256) NOT NULL,
  `subs_limits` varchar(256) NOT NULL,
  `is_deleted` int(11) NOT NULL DEFAULT '0',
  `type_in` varchar(255) DEFAULT NULL,
  `date_input` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `eng_bbb`
--

INSERT INTO `eng_bbb` (`id`, `eng_bbb`, `underwriter_bbb`, `insured_bbb`, `industry_bbb`, `intermediary_bbb`, `selectCurrency_bbb`, `sob_limits`, `sob_rate`, `sob_prem`, `s2cc_limits`, `s2cc_rate`, `s2cc_prem`, `s3pi_limits`, `s3pi_rate`, `s3pi_prem`, `s3pi_limits2`, `s3pi_rate2`, `s3pi_prem2`, `peril_limits`, `peril_rate`, `peril_prem`, `aloi_limits`, `aloi_rate`, `aloi_prem`, `other_desc_bbb`, `other_limit_bbb`, `other_rate_bbb`, `other_prem_bbb`, `other_desc_bbb1`, `other_limit_bbb1`, `other_rate_bbb1`, `other_prem_bbb1`, `other_desc_bbb2`, `other_limit_bbb2`, `other_rate_bbb2`, `other_prem_bbb2`, `other_desc_bbb3`, `other_limit_bbb3`, `other_rate_bbb3`, `other_prem_bbb3`, `other_desc_bbb4`, `other_limit_bbb4`, `other_rate_bbb4`, `other_prem_bbb4`, `apremm_limits`, `apremm_rate`, `apremm_prem`, `ded_limits`, `subs_limits`, `is_deleted`, `type_in`, `date_input`) VALUES
(1, '', 'Admin', '', '', '', 'none', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '0', '0', '0', 0, NULL, '2020-07-03 00:00:00'),
(2, 'eng_bbb', 'Admin', 'B', 'BB', 'BBB', 'EUROS', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '0', '0', '0', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '50.00', '0', '0', 0, NULL, '2020-07-23 14:45:51'),
(4, 'eng_bbb', 'Admin', 'ccc', 'ddddddddddd', 'zzzzzzzzzz', 'GHC', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '0', '0', '0', '1000', '1', '10.00', '1000', '1', '10.00', 'aaaaaa', '1000', '1', '10.00', 'qqqqqqqqq', '1000', '1', '10.00', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '70.00', 'qwert', 'qwertyu', 1, NULL, '2020-08-02 10:48:10'),
(5, 'eng_bbb', 'Admin', '', '', '', 'none', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'nnnnnnnnn', '1000', '1', '10.00', 'nnnnnnnnnnnnnnnnnnnnnnn', '1000', '1', '10.00', 'nnnnnnnnnnnnnnnn', '1000', '1', '10.00', 'nnnnnnnnnnnnnnn', '1000', '1', '10.00', 'nnnnnnnnnnnnnnnnnnnnnnn', '1000', '1', '10.00', '0', '0', '50.00', '', '', 0, NULL, '2020-09-02 08:49:57');

-- --------------------------------------------------------

--
-- Table structure for table `eng_bi`
--

CREATE TABLE `eng_bi` (
  `id` int(11) NOT NULL,
  `eng_bty` varchar(150) NOT NULL,
  `underwriter_bty` varchar(256) NOT NULL,
  `insured_bty` varchar(256) NOT NULL,
  `industry_bty` varchar(256) NOT NULL,
  `intermediary_bty` varchar(256) NOT NULL,
  `selectCurrency_bty` varchar(256) NOT NULL,
  `fge_limits` varchar(256) NOT NULL,
  `fge_rate` varchar(256) NOT NULL,
  `fge_prem` varchar(256) NOT NULL,
  `premises_limits` varchar(256) NOT NULL,
  `premises_rate` varchar(256) NOT NULL,
  `premises_prem` varchar(256) NOT NULL,
  `transit_limits` varchar(256) NOT NULL,
  `transit_rate` varchar(256) NOT NULL,
  `transit_prem` varchar(256) NOT NULL,
  `fc_limits` varchar(256) NOT NULL,
  `fc_rate` varchar(256) NOT NULL,
  `fc_prem` varchar(256) NOT NULL,
  `fs_limits` varchar(256) NOT NULL,
  `fs_rate` varchar(256) NOT NULL,
  `fs_prem` varchar(256) NOT NULL,
  `cc_limits` varchar(256) NOT NULL,
  `cc_rate` varchar(256) NOT NULL,
  `cc_prem` varchar(256) NOT NULL,
  `doc_limits` varchar(256) NOT NULL,
  `doc_rate` varchar(256) NOT NULL,
  `doc_prem` varchar(256) NOT NULL,
  `los_limits` varchar(256) NOT NULL,
  `los_rate` varchar(256) NOT NULL,
  `los_prem` varchar(256) NOT NULL,
  `pi_limits` varchar(256) NOT NULL,
  `pi_rate` varchar(256) NOT NULL,
  `pi_prem` varchar(256) NOT NULL,
  `rm_limits` varchar(256) NOT NULL,
  `rm_rate` varchar(256) NOT NULL,
  `rm_prem` varchar(256) NOT NULL,
  `lod_limits` varchar(256) NOT NULL,
  `lod_rate` varchar(256) NOT NULL,
  `lod_prem` varchar(256) NOT NULL,
  `csdb_limits` varchar(256) NOT NULL,
  `csdb_rate` varchar(256) NOT NULL,
  `csdb_prem` varchar(256) NOT NULL,
  `ccl_limits` varchar(256) NOT NULL,
  `ccl_rate` varchar(256) NOT NULL,
  `ccl_prem` varchar(256) NOT NULL,
  `other_desc_bi` varchar(256) NOT NULL,
  `other_limit_bi` varchar(256) NOT NULL,
  `other_rate_bi` varchar(256) NOT NULL,
  `other_prem_bi` varchar(256) NOT NULL,
  `other_desc_bi1` varchar(256) NOT NULL,
  `other_limit_bi1` varchar(256) NOT NULL,
  `other_rate_bi1` varchar(256) NOT NULL,
  `other_prem_bi1` varchar(256) NOT NULL,
  `other_desc_bi2` varchar(256) NOT NULL,
  `other_limit_bi2` varchar(256) NOT NULL,
  `other_rate_bi2` varchar(256) NOT NULL,
  `other_prem_bi2` varchar(256) NOT NULL,
  `other_desc_bi3` varchar(256) NOT NULL,
  `other_limit_bi3` varchar(256) NOT NULL,
  `other_rate_bi3` varchar(256) NOT NULL,
  `other_prem_bi3` varchar(256) NOT NULL,
  `other_desc_bi4` varchar(256) NOT NULL,
  `other_limit_bi4` varchar(256) NOT NULL,
  `other_rate_bi4` varchar(256) NOT NULL,
  `other_prem_bi4` varchar(256) NOT NULL,
  `tsi4bi_limits` varchar(256) NOT NULL,
  `tsi4bi_rate` varchar(256) NOT NULL,
  `tsi4bi_prem` varchar(256) NOT NULL,
  `ap4bi_limits` varchar(256) NOT NULL,
  `ap4bi_rate` varchar(256) NOT NULL,
  `ap4bi_prem` varchar(256) NOT NULL,
  `de4bi_limits` varchar(256) NOT NULL,
  `sub4bi_limits` varchar(256) NOT NULL,
  `is_deleted` int(11) NOT NULL DEFAULT '0',
  `type_in` varchar(255) DEFAULT NULL,
  `date_input` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `eng_bi`
--

INSERT INTO `eng_bi` (`id`, `eng_bty`, `underwriter_bty`, `insured_bty`, `industry_bty`, `intermediary_bty`, `selectCurrency_bty`, `fge_limits`, `fge_rate`, `fge_prem`, `premises_limits`, `premises_rate`, `premises_prem`, `transit_limits`, `transit_rate`, `transit_prem`, `fc_limits`, `fc_rate`, `fc_prem`, `fs_limits`, `fs_rate`, `fs_prem`, `cc_limits`, `cc_rate`, `cc_prem`, `doc_limits`, `doc_rate`, `doc_prem`, `los_limits`, `los_rate`, `los_prem`, `pi_limits`, `pi_rate`, `pi_prem`, `rm_limits`, `rm_rate`, `rm_prem`, `lod_limits`, `lod_rate`, `lod_prem`, `csdb_limits`, `csdb_rate`, `csdb_prem`, `ccl_limits`, `ccl_rate`, `ccl_prem`, `other_desc_bi`, `other_limit_bi`, `other_rate_bi`, `other_prem_bi`, `other_desc_bi1`, `other_limit_bi1`, `other_rate_bi1`, `other_prem_bi1`, `other_desc_bi2`, `other_limit_bi2`, `other_rate_bi2`, `other_prem_bi2`, `other_desc_bi3`, `other_limit_bi3`, `other_rate_bi3`, `other_prem_bi3`, `other_desc_bi4`, `other_limit_bi4`, `other_rate_bi4`, `other_prem_bi4`, `tsi4bi_limits`, `tsi4bi_rate`, `tsi4bi_prem`, `ap4bi_limits`, `ap4bi_rate`, `ap4bi_prem`, `de4bi_limits`, `sub4bi_limits`, `is_deleted`, `type_in`, `date_input`) VALUES
(1, '', 'Admin', 'cwdc', 'wfddws', 'wefd', 'U$D', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '130.00', '0', '0', '130.00', '0', '0', 0, NULL, '2020-07-03 00:00:00'),
(3, '', 'Admin', '', 'I', 'BI', 'EUROS', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '130.00', '0', '0', '130.00', '0', '0', 0, NULL, '2020-07-22 23:17:22'),
(4, '', 'Admin', '', '2ewlfd', 'wefdvsk', 'GHC', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', 0, NULL, '2020-07-22 23:18:14'),
(5, '', 'Admin', '', '2ewlfd', 'BI', 'GHC', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', 0, NULL, '2020-07-22 23:24:41'),
(6, 'eng_bty', 'Admin', 'aaaa', 'ssssssssss', 'dfwedsvd', 'none', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', 0, NULL, '2020-07-22 23:30:58'),
(8, 'eng_bty', 'Admin', 'ddddd', 'bababb', 'babab', 'GHC', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', 'asdfgh', '1000', '1', '10.00', 'zxcvbn', '1000', '1', '10.00', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '150.00', '0', '0', '150.00', 'qwertyui', 'qwertyuiop', 0, NULL, '2020-08-01 22:53:15'),
(9, 'eng_bty', 'Admin', 'dd', 'ddddddddddddddddddddd', 'dddddddddddddd', 'U$D', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'ffffffffff', '1000', '1', '10.00', 'fffffffffff', '1000', '1', '10.00', 'eeeeeeeeeeeee', '1000', '1', '10.00', 'dddddd', '1000', '1', '10.00', 'fddddddd', '1000', '1', '10.00', '0', '0', '50.00', '0', '0', '50.00', 'ddd', 'ddddd', 1, NULL, '2020-09-02 08:09:44');

-- --------------------------------------------------------

--
-- Table structure for table `eng_ce`
--

CREATE TABLE `eng_ce` (
  `id` int(11) NOT NULL,
  `eng_ce` varchar(256) NOT NULL,
  `underwriter_ce` varchar(256) NOT NULL,
  `insured_ce` varchar(256) NOT NULL,
  `industry_ce` varchar(256) NOT NULL,
  `intermediary_ce` varchar(256) NOT NULL,
  `selectCurrency_ce` varchar(256) NOT NULL,
  `contract_sum_cp` varchar(255) NOT NULL,
  `rate_cp` varchar(255) NOT NULL,
  `premium_cp` varchar(255) NOT NULL,
  `contract_sum_tpl` varchar(255) NOT NULL,
  `rate_tpl` varchar(255) NOT NULL,
  `premium_tpl` varchar(255) NOT NULL,
  `contract_sum_csp` varchar(255) NOT NULL,
  `rate_csp` varchar(255) NOT NULL,
  `premium_csp` varchar(255) NOT NULL,
  `contract_sum_bpm` varchar(255) NOT NULL,
  `rate_bpm` varchar(255) NOT NULL,
  `premium_bpm` varchar(255) NOT NULL,
  `contract_sum_rod` varchar(255) NOT NULL,
  `rate_rod` varchar(255) NOT NULL,
  `premium_rod` varchar(255) NOT NULL,
  `contract_sum_md` varchar(255) NOT NULL,
  `rate_md` varchar(255) NOT NULL,
  `premium_md` varchar(255) NOT NULL,
  `contract_sum_src` varchar(255) NOT NULL,
  `rate_src` varchar(255) NOT NULL,
  `premium_src` varchar(255) NOT NULL,
  `contract_sum_cl` varchar(255) NOT NULL,
  `rate_cl` varchar(255) NOT NULL,
  `premium_cl` varchar(255) NOT NULL,
  `contract_sum_72hc` varchar(255) NOT NULL,
  `rate_72hc` varchar(255) NOT NULL,
  `premium_72hc` varchar(255) NOT NULL,
  `contract_sum_pf` varchar(255) NOT NULL,
  `rate_pf` varchar(255) NOT NULL,
  `premium_pf` varchar(255) NOT NULL,
  `contract_sum_emc` varchar(255) NOT NULL,
  `rate_emc` varchar(255) NOT NULL,
  `premium_emc` varchar(255) NOT NULL,
  `contract_sum_spy` varchar(255) NOT NULL,
  `rate_spy` varchar(255) NOT NULL,
  `premium_spy` varchar(255) NOT NULL,
  `contract_sum_aisi` varchar(255) NOT NULL,
  `rate_aisi` varchar(255) NOT NULL,
  `premium_aisi` varchar(255) NOT NULL,
  `contract_sum_rv` varchar(255) NOT NULL,
  `rate_rv` varchar(255) NOT NULL,
  `premium_rv` varchar(255) NOT NULL,
  `contract_sum_arsi` varchar(255) NOT NULL,
  `rate_arsi` varchar(255) NOT NULL,
  `premium_arsi` varchar(255) NOT NULL,
  `contract_sum_m50` varchar(255) NOT NULL,
  `rate_m50` varchar(255) NOT NULL,
  `premium_m50` varchar(255) NOT NULL,
  `contract_sum_pa` varchar(255) NOT NULL,
  `rate_pa` varchar(255) NOT NULL,
  `premium_pa` varchar(255) NOT NULL,
  `contract_sum_cpc` varchar(255) NOT NULL,
  `rate_cpc` varchar(255) NOT NULL,
  `premium_cpc` varchar(255) NOT NULL,
  `contract_sum_ucp` varchar(255) NOT NULL,
  `rate_ucp` varchar(255) NOT NULL,
  `premium_ucp` varchar(255) NOT NULL,
  `contract_sum_wos` varchar(255) NOT NULL,
  `rate_wos` varchar(255) NOT NULL,
  `premium_wos` varchar(255) NOT NULL,
  `contract_sum_pdc` varchar(255) NOT NULL,
  `rate_pdc` varchar(255) NOT NULL,
  `premium_pdc` varchar(255) NOT NULL,
  `contract_sum_msec` varchar(255) NOT NULL,
  `rate_msec` varchar(255) NOT NULL,
  `premium_msec` varchar(255) NOT NULL,
  `contract_sum_eco` varchar(255) NOT NULL,
  `rate_eco` varchar(255) NOT NULL,
  `premium_eco` varchar(255) NOT NULL,
  `contract_sum_ecfa` varchar(255) NOT NULL,
  `rate_ecfa` varchar(255) NOT NULL,
  `premium_ecfa` varchar(255) NOT NULL,
  `contract_sum_poss` varchar(255) NOT NULL,
  `rate_poss` varchar(255) NOT NULL,
  `premium_poss` varchar(255) NOT NULL,
  `contract_sum_esp` varchar(255) NOT NULL,
  `rate_esp` varchar(255) NOT NULL,
  `premium_esp` varchar(255) NOT NULL,
  `contract_sum_wcc` varchar(255) NOT NULL,
  `rate_wcc` varchar(255) NOT NULL,
  `premium_wcc` varchar(255) NOT NULL,
  `contract_sum_it` varchar(255) NOT NULL,
  `rate_it` varchar(255) NOT NULL,
  `premium_it` varchar(255) NOT NULL,
  `contract_sum_epp` varchar(255) NOT NULL,
  `rate_epp` varchar(255) NOT NULL,
  `premium_epp` varchar(255) NOT NULL,
  `contract_sum_vrws` varchar(255) NOT NULL,
  `rate_vrws` varchar(255) NOT NULL,
  `premium_vrws` varchar(255) NOT NULL,
  `other_one` varchar(250) NOT NULL,
  `other_one_sum` varchar(250) NOT NULL,
  `other_one_rate` varchar(250) NOT NULL,
  `other_one_prem` varchar(250) NOT NULL,
  `other_two` varchar(250) NOT NULL,
  `other_two_sum` varchar(250) NOT NULL,
  `other_two_rate` varchar(250) NOT NULL,
  `other_two_prem` varchar(250) NOT NULL,
  `others_three` varchar(250) NOT NULL,
  `others_three_sum` varchar(250) NOT NULL,
  `others_three_rate` varchar(250) NOT NULL,
  `others_three_prem` varchar(250) NOT NULL,
  `others_four` varchar(250) NOT NULL,
  `others_four_sum` varchar(250) NOT NULL,
  `others_four_rate` varchar(250) NOT NULL,
  `others_four_prem` varchar(250) NOT NULL,
  `others_five` varchar(250) NOT NULL,
  `others_five_sum` varchar(250) NOT NULL,
  `others_five_rate` varchar(250) NOT NULL,
  `others_five_prem` varchar(250) NOT NULL,
  `contract_sum_ebp` varchar(255) NOT NULL,
  `rate_ebp` varchar(255) NOT NULL,
  `premium_ebp` varchar(255) NOT NULL,
  `contract_sum_levy` varchar(255) NOT NULL,
  `rate_levy` varchar(255) NOT NULL,
  `premium_levy` varchar(255) NOT NULL,
  `contract_sum_cert` varchar(255) NOT NULL,
  `rate_cert` varchar(255) NOT NULL,
  `premium_cert` varchar(255) NOT NULL,
  `contract_sum_prem` varchar(255) NOT NULL,
  `rate_prem` varchar(255) NOT NULL,
  `premium_prem` varchar(255) NOT NULL,
  `contract_sum_ded` varchar(255) NOT NULL,
  `works_e` varchar(255) NOT NULL,
  `property_d` varchar(255) NOT NULL,
  `testing` varchar(255) NOT NULL,
  `others` varchar(255) NOT NULL,
  `contract_sum_sub` varchar(255) NOT NULL,
  `is_deleted` int(11) NOT NULL DEFAULT '0',
  `type_in` varchar(255) DEFAULT NULL,
  `date_input` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `eng_ce`
--

INSERT INTO `eng_ce` (`id`, `eng_ce`, `underwriter_ce`, `insured_ce`, `industry_ce`, `intermediary_ce`, `selectCurrency_ce`, `contract_sum_cp`, `rate_cp`, `premium_cp`, `contract_sum_tpl`, `rate_tpl`, `premium_tpl`, `contract_sum_csp`, `rate_csp`, `premium_csp`, `contract_sum_bpm`, `rate_bpm`, `premium_bpm`, `contract_sum_rod`, `rate_rod`, `premium_rod`, `contract_sum_md`, `rate_md`, `premium_md`, `contract_sum_src`, `rate_src`, `premium_src`, `contract_sum_cl`, `rate_cl`, `premium_cl`, `contract_sum_72hc`, `rate_72hc`, `premium_72hc`, `contract_sum_pf`, `rate_pf`, `premium_pf`, `contract_sum_emc`, `rate_emc`, `premium_emc`, `contract_sum_spy`, `rate_spy`, `premium_spy`, `contract_sum_aisi`, `rate_aisi`, `premium_aisi`, `contract_sum_rv`, `rate_rv`, `premium_rv`, `contract_sum_arsi`, `rate_arsi`, `premium_arsi`, `contract_sum_m50`, `rate_m50`, `premium_m50`, `contract_sum_pa`, `rate_pa`, `premium_pa`, `contract_sum_cpc`, `rate_cpc`, `premium_cpc`, `contract_sum_ucp`, `rate_ucp`, `premium_ucp`, `contract_sum_wos`, `rate_wos`, `premium_wos`, `contract_sum_pdc`, `rate_pdc`, `premium_pdc`, `contract_sum_msec`, `rate_msec`, `premium_msec`, `contract_sum_eco`, `rate_eco`, `premium_eco`, `contract_sum_ecfa`, `rate_ecfa`, `premium_ecfa`, `contract_sum_poss`, `rate_poss`, `premium_poss`, `contract_sum_esp`, `rate_esp`, `premium_esp`, `contract_sum_wcc`, `rate_wcc`, `premium_wcc`, `contract_sum_it`, `rate_it`, `premium_it`, `contract_sum_epp`, `rate_epp`, `premium_epp`, `contract_sum_vrws`, `rate_vrws`, `premium_vrws`, `other_one`, `other_one_sum`, `other_one_rate`, `other_one_prem`, `other_two`, `other_two_sum`, `other_two_rate`, `other_two_prem`, `others_three`, `others_three_sum`, `others_three_rate`, `others_three_prem`, `others_four`, `others_four_sum`, `others_four_rate`, `others_four_prem`, `others_five`, `others_five_sum`, `others_five_rate`, `others_five_prem`, `contract_sum_ebp`, `rate_ebp`, `premium_ebp`, `contract_sum_levy`, `rate_levy`, `premium_levy`, `contract_sum_cert`, `rate_cert`, `premium_cert`, `contract_sum_prem`, `rate_prem`, `premium_prem`, `contract_sum_ded`, `works_e`, `property_d`, `testing`, `others`, `contract_sum_sub`, `is_deleted`, `type_in`, `date_input`) VALUES
(1, '', '', '', '', '', '', '500,000.00', '2.5%', '12,500.00', '0', '0', '0', '0', '0', '0', '0', '0', '12,500.00', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '12,500.00', '1', '0', '125.00', '0', '0', '0', '0', '0', '12,625.00', '', '', '', '', '', '', 0, NULL, NULL),
(7, '', 'A', '', '', '', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', 0, NULL, '2020-03-11'),
(9, '', 'A', 'David Adzovor', 'Engineering', 'Cyril', 'GHâ‚µ', '500,000.00', '1.5%', '7,500.00', '12,200.00', '2.5%', '305.00', '9,000.00', '1%', '90.00', '0', '0', '7,895.00', '240.00', '0.5%', '1.20', '1,000.00', '0.5%', '5.00', '500.00', '0.1%', '0.50', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '7,901.70', '1%', '0', '79.02', '0', '0', '0', '0', '0', '7,980.72', '', '', '', '', '', '', 0, NULL, '2020-03-11'),
(10, '', 'A', 'Benjamin O', 'Engineering', 'Moses', 'U$D', '500,000.00', '1.5%', '7,500.00', '12,200.00', '2.5%', '305.00', '9,000.00', '1%', '90.00', '0', '0', '7,895.00', '240.00', '0.5%', '1.20', '1,000.00', '0.5%', '5.00', '500.00', '0.1%', '0.50', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '7,901.70', '1%', '0', '79.02', '0', '0', '0', '0', '0', '7,980.72', '', '', '', '', '', '', 0, NULL, '2020-03-11'),
(11, '', 'A', '', '', '', 'none', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', 0, NULL, '2020-03-11'),
(12, '', 'A', '', '', '', 'none', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', 0, NULL, '2020-03-11'),
(16, '', 'Admin', '', '', '', 'none', '100', '1', '1.00', '100', '1', '1.00', '1000', '1', '10.00', '0', '0', '12.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1000', '1', '272.00', '1000', '1', '2,720.00', '', '1', '0', '0', '0', '2,992.00', '', '', '', '', '', '', 0, NULL, '2020-07-13'),
(18, 'eng_ce', 'Admin', 'Dav', 'Ermk', 'Max', 'GHC', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '0', '0', '30.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '290.00', '1', '0', '2.90', '0', '0', '1000', '0', '0', '1,292.90', '', '', '', '', '', '', 0, NULL, '0000-00-00'),
(23, 'eng_ce', 'Admin', '', '', '', 'none', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1000', '1', '10.00', '', '1000', '1', '10.00', '', '1000', '1', '10.00', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '30.00', '1%', '0', '0.30', '0', '0', '0', '0', '0', '30.30', '', '', '', '', '', '', 1, NULL, '2020-07-28'),
(25, 'eng_ce', 'Admin', 'dddddddddd', 'dddddddddddd', 'dd', 'U$D', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '0', '0', '30.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa', '1000', '1', '10.00', 'ssssssssssssssssssssssss', '1000', '1', '10.00', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '310.00', '1', '0', '3.10', '0', '0', '1000', '0', '0', '1,313.10', 'ddddddddddddddddddddd', '', '', '', '', 'qwertyuiop', 0, NULL, '2020-08-04'),
(26, 'eng_ce', 'Admin', '', 'CONSULTANCY', '', 'none', '3000000', '0.25', '7,500.00', '500000', '0.5', '2,500.00', '1000000', '0.25', '2,500.00', '0', '0', '12,500.00', '100000', '0.025', '25.00', '0', '0', '0.00', '0', '0', '0.00', '0', '0', '0.00', '0', '0', '0.00', '100000', '0.025', '25.00', '0', '0', '0.00', '0', '0', '0.00', '0', '0', '0.00', '0', '0', '0.00', '0', '0', '0.00', '0', '0', '0.00', '0', '0', '0.00', '0', '0', '0.00', '0', '0', '0.00', '0', '0', '0.00', '0', '0', '0.00', '0', '0', '0.00', '0', '0', '0.00', '0', '0', '0.00', '0', '0', '0.00', '0', '0', '0.00', '0', '0', '0.00', '0', '0', '0.00', '0', '0', '0.00', '0', '0', '0.00', '', '0', '0', '0.00', '', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '12,550.00', '1', '0', '125.50', '0', '0', '0', '0', '0', '12,675.50', 'ACTS OF GOD - 15%EEL, MIN. GHC5,000.00', '', '', '', '', '', 0, NULL, '2020-08-07'),
(27, 'eng_ce', 'Admin', 'aaaaaaaa', 'aaaaaaaaaaa', 'aaaa', 'GHC', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '0', '0', '30.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', 'wwwwwwwwww', '1000', '1', '10.00', 'qqqqqqqq', '1000', '1', '10.00', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '340.00', '1', '0', '3.40', 'undefined', '0', '1000', '0', '0', '1,343.40', 'eeeeeeeeeeeeeeeee', 'eeeeeeeeeeeeeeeeeeee', 'eeeeeeeeeeeeee', 'eeeeeeeeeeee', 'eeeeeeeeeeeeeeeeeee', '', 0, NULL, '2020-08-24'),
(28, 'eng_ce', 'Admin', 'wwwwwww', 'wwwwwwwwwwwwwwwwwwwwww', 'wwwwwwwwwwwww', 'GBP', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '0', '0', '30.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', 'wsc', '1000', '1', '10.00', 'fff', '1000', '1', '10.00', 'efdf', '1000', '1', '10.00', 'ffffffff', '1000', '1', '10.00', 'ffffff', '1000', '1', '10.00', '0', '0', '340.00', '1000', '0', '3,400.00', '0', '0', '1000', '0', '0', '4,740.00', 'wwwwwwwwwwwwwwww', 'wwwwwwwwwwwwwwwwwwwwwwwww', '', 'wwwwwwwwwwwwwwwwwwwwwwwwww', 'wwwwwwwwwwwwwwwwww', 'wwwwwwwwwwwwwwwwww', 0, NULL, '2020-10-09'),
(29, 'eng_ce', 'Admin', 'c', '', '', 'none', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '0', '0', '0', '', '0', '0', '0', '', '0', '0', '0', '', '0', '0', '0', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', 'xx', '', '', 0, NULL, '2020-10-09'),
(30, 'eng_ce', 'Admin', 'New', 'Testing', '1', 'U$D', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '0', '0', '30.00', '1000', '1', '10.00', '1000', '1', '10.00', '100', '1', '1.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', 'cc', '1000', '1', '10.00', 'cc', '1000', '1', '10.00', 'ccc', '1000', '1', '10.00', 'ccccc', '1000', '1', '10.00', 'eee', '1000', '1', '10.00', '0', '0', '331.00', '1000', '0', '3,310.00', '0', '0', '1000', '0', '0', '4,641.00', 'xx', 'efsc', 'wfc', 'ewfcw', 'wefc', 'rwgdvws', 0, NULL, '2020-10-11'),
(31, 'eng_ce', 'Hollard Admin', 'wbkew', '', '', 'none', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '0', '0', '0', '', '0', '0', '0', '', '0', '0', '0', '', '0', '0', '0', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', 0, NULL, '2020-10-11');

-- --------------------------------------------------------

--
-- Table structure for table `eng_do_liability`
--

CREATE TABLE `eng_do_liability` (
  `id` int(11) NOT NULL,
  `eng_dol` varchar(150) NOT NULL,
  `underwriter_do` varchar(256) NOT NULL,
  `insured_do` varchar(256) NOT NULL,
  `industry_do` varchar(256) NOT NULL,
  `intermediary_do` varchar(256) NOT NULL,
  `selectCurrency_do` varchar(256) NOT NULL,
  `adoc_si` varchar(256) NOT NULL,
  `adoc_rate` varchar(256) NOT NULL,
  `adoc_prem` varchar(256) NOT NULL,
  `lpd_si` varchar(256) NOT NULL,
  `lpd_rate` varchar(256) NOT NULL,
  `lpd_prem` varchar(256) NOT NULL,
  `peri_si` varchar(256) NOT NULL,
  `peri_rate` varchar(256) NOT NULL,
  `peri_prem` varchar(256) NOT NULL,
  `all3_si` varchar(256) NOT NULL,
  `all3_rate` varchar(256) NOT NULL,
  `all3_prem` varchar(256) NOT NULL,
  `other_desc_do` varchar(256) NOT NULL,
  `other_si_do` varchar(256) NOT NULL,
  `other_rate_do` varchar(256) NOT NULL,
  `other_prem_do` varchar(256) NOT NULL,
  `other_desc_do1` varchar(256) NOT NULL,
  `other_si_do1` varchar(256) NOT NULL,
  `other_rate_do1` varchar(256) NOT NULL,
  `other_prem_do1` varchar(256) NOT NULL,
  `other_desc_do2` varchar(256) NOT NULL,
  `other_si_do2` varchar(256) NOT NULL,
  `other_rate_do2` varchar(256) NOT NULL,
  `other_prem_do2` varchar(256) NOT NULL,
  `other_desc_do3` varchar(256) NOT NULL,
  `other_si_do3` varchar(256) NOT NULL,
  `other_rate_do3` varchar(256) NOT NULL,
  `other_prem_do3` varchar(256) NOT NULL,
  `other_desc_do4` varchar(256) NOT NULL,
  `other_si_do4` varchar(256) NOT NULL,
  `other_rate_do4` varchar(256) NOT NULL,
  `other_prem_do4` varchar(256) NOT NULL,
  `ap4do_si` varchar(256) NOT NULL,
  `ap4do_rate` varchar(256) NOT NULL,
  `ap4do_prem` varchar(256) NOT NULL,
  `de4do_si` varchar(256) NOT NULL,
  `sub4do_si` varchar(256) NOT NULL,
  `is_deleted` int(11) NOT NULL DEFAULT '0',
  `type_in` varchar(255) DEFAULT NULL,
  `date_input` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `eng_do_liability`
--

INSERT INTO `eng_do_liability` (`id`, `eng_dol`, `underwriter_do`, `insured_do`, `industry_do`, `intermediary_do`, `selectCurrency_do`, `adoc_si`, `adoc_rate`, `adoc_prem`, `lpd_si`, `lpd_rate`, `lpd_prem`, `peri_si`, `peri_rate`, `peri_prem`, `all3_si`, `all3_rate`, `all3_prem`, `other_desc_do`, `other_si_do`, `other_rate_do`, `other_prem_do`, `other_desc_do1`, `other_si_do1`, `other_rate_do1`, `other_prem_do1`, `other_desc_do2`, `other_si_do2`, `other_rate_do2`, `other_prem_do2`, `other_desc_do3`, `other_si_do3`, `other_rate_do3`, `other_prem_do3`, `other_desc_do4`, `other_si_do4`, `other_rate_do4`, `other_prem_do4`, `ap4do_si`, `ap4do_rate`, `ap4do_prem`, `de4do_si`, `sub4do_si`, `is_deleted`, `type_in`, `date_input`) VALUES
(1, '', 'Admin', 'dwd', 'efwd', 'efd', 'U$D', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '30.00', '0', '0', 0, NULL, '2020-07-02'),
(2, 'eng_do', 'Admin', 'D', 'O', 'DOL', 'GHC', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '30.00', '0', '0', 0, NULL, '2020-07-22'),
(3, 'eng_do', 'Admin', '', '', '', 'none', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'ffffffffffffffffffff', '1000', '1', '10.00', 'fffffffffffffffffffff', '1000', '1', '10.00', 'ffffffffffffffffff', '1000', '1', '10.00', 'fffffffffffffffffff', '1000', '1', '10.00', 'fffffffffffff', '1000', '1', '10.00', '0', '0', '50.00', 'fffffffffffffffffff', 'fffffffffffffffffff', 1, NULL, '2020-09-01');

-- --------------------------------------------------------

--
-- Table structure for table `eng_for_gl`
--

CREATE TABLE `eng_for_gl` (
  `id` int(11) NOT NULL,
  `eng_gl` varchar(150) NOT NULL,
  `underwriter_liability` varchar(256) NOT NULL,
  `insured_liability` varchar(256) NOT NULL,
  `industry_liability` varchar(256) NOT NULL,
  `intermediary_liability` varchar(256) NOT NULL,
  `selectCurrency_liability` varchar(256) NOT NULL,
  `pl4gl_si` varchar(256) NOT NULL,
  `pl4gl_rate` varchar(256) NOT NULL,
  `pl4gl_prem` varchar(256) NOT NULL,
  `plt_si` varchar(256) NOT NULL,
  `plt_rate` varchar(256) NOT NULL,
  `plt_prem` varchar(256) NOT NULL,
  `plll_si` varchar(256) NOT NULL,
  `plll_rate` varchar(256) NOT NULL,
  `plll_prem` varchar(256) NOT NULL,
  `all_si` varchar(256) NOT NULL,
  `all_rate` varchar(256) NOT NULL,
  `all_prem` varchar(256) NOT NULL,
  `bppl_si` varchar(256) NOT NULL,
  `bppl_rate` varchar(256) NOT NULL,
  `bppl_prem` varchar(256) NOT NULL,
  `pl4pl_si` varchar(256) NOT NULL,
  `pl4pl_rate` varchar(256) NOT NULL,
  `pl4pl_prem` varchar(256) NOT NULL,
  `tl_si` varchar(256) NOT NULL,
  `tl_rate` varchar(256) NOT NULL,
  `tl_prem` varchar(256) NOT NULL,
  `cl_si` varchar(256) NOT NULL,
  `cl_rate` varchar(256) NOT NULL,
  `cl_prem` varchar(256) NOT NULL,
  `ws_si` varchar(256) NOT NULL,
  `ws_rate` varchar(256) NOT NULL,
  `ws_prem` varchar(256) NOT NULL,
  `defw_si` varchar(256) NOT NULL,
  `defw_rate` varchar(256) NOT NULL,
  `defw_prem` varchar(256) NOT NULL,
  `pfl_si` varchar(256) NOT NULL,
  `pfl_rate` varchar(256) NOT NULL,
  `pfl_prem` varchar(256) NOT NULL,
  `pi4gl_si` varchar(256) NOT NULL,
  `pi4gl_rate` varchar(256) NOT NULL,
  `pi4gl_prem` varchar(256) NOT NULL,
  `rel_si` varchar(256) NOT NULL,
  `rel_rate` varchar(256) NOT NULL,
  `rel_prem` varchar(256) NOT NULL,
  `sldc_si` varchar(256) NOT NULL,
  `sldc_rate` varchar(256) NOT NULL,
  `sldc_prem` varchar(256) NOT NULL,
  `wad_si` varchar(256) NOT NULL,
  `wad_rate` varchar(256) NOT NULL,
  `wad_prem` varchar(256) NOT NULL,
  `other_desc_gl` varchar(256) NOT NULL,
  `other_si_gl` varchar(256) NOT NULL,
  `other_rate_gl` varchar(256) NOT NULL,
  `other_prem_gl` varchar(256) NOT NULL,
  `other_desc_gl1` varchar(256) NOT NULL,
  `other_si_gl1` varchar(256) NOT NULL,
  `other_rate_gl1` varchar(256) NOT NULL,
  `other_prem_gl1` varchar(256) NOT NULL,
  `other_desc_gl2` varchar(256) NOT NULL,
  `other_si_gl2` varchar(256) NOT NULL,
  `other_rate_gl2` varchar(256) NOT NULL,
  `other_prem_gl2` varchar(256) NOT NULL,
  `other_desc_gl3` varchar(256) NOT NULL,
  `other_si_gl3` varchar(256) NOT NULL,
  `other_rate_gl3` varchar(256) NOT NULL,
  `other_prem_gl3` varchar(256) NOT NULL,
  `other_desc_gl4` varchar(256) NOT NULL,
  `other_si_gl4` varchar(256) NOT NULL,
  `other_rate_gl4` varchar(256) NOT NULL,
  `other_prem_gl4` varchar(256) NOT NULL,
  `tap_si` varchar(256) NOT NULL,
  `tap_rate` varchar(256) NOT NULL,
  `tap_prem` varchar(256) NOT NULL,
  `eng_liability_si` varchar(256) NOT NULL,
  `eng_liability_rate` varchar(256) NOT NULL,
  `eng_liability_prem` varchar(256) NOT NULL,
  `de_si` varchar(256) NOT NULL,
  `subject_si` varchar(256) NOT NULL,
  `is_deleted` int(11) NOT NULL DEFAULT '0',
  `type_in` varchar(255) DEFAULT NULL,
  `date_input_gl` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `eng_for_gl`
--

INSERT INTO `eng_for_gl` (`id`, `eng_gl`, `underwriter_liability`, `insured_liability`, `industry_liability`, `intermediary_liability`, `selectCurrency_liability`, `pl4gl_si`, `pl4gl_rate`, `pl4gl_prem`, `plt_si`, `plt_rate`, `plt_prem`, `plll_si`, `plll_rate`, `plll_prem`, `all_si`, `all_rate`, `all_prem`, `bppl_si`, `bppl_rate`, `bppl_prem`, `pl4pl_si`, `pl4pl_rate`, `pl4pl_prem`, `tl_si`, `tl_rate`, `tl_prem`, `cl_si`, `cl_rate`, `cl_prem`, `ws_si`, `ws_rate`, `ws_prem`, `defw_si`, `defw_rate`, `defw_prem`, `pfl_si`, `pfl_rate`, `pfl_prem`, `pi4gl_si`, `pi4gl_rate`, `pi4gl_prem`, `rel_si`, `rel_rate`, `rel_prem`, `sldc_si`, `sldc_rate`, `sldc_prem`, `wad_si`, `wad_rate`, `wad_prem`, `other_desc_gl`, `other_si_gl`, `other_rate_gl`, `other_prem_gl`, `other_desc_gl1`, `other_si_gl1`, `other_rate_gl1`, `other_prem_gl1`, `other_desc_gl2`, `other_si_gl2`, `other_rate_gl2`, `other_prem_gl2`, `other_desc_gl3`, `other_si_gl3`, `other_rate_gl3`, `other_prem_gl3`, `other_desc_gl4`, `other_si_gl4`, `other_rate_gl4`, `other_prem_gl4`, `tap_si`, `tap_rate`, `tap_prem`, `eng_liability_si`, `eng_liability_rate`, `eng_liability_prem`, `de_si`, `subject_si`, `is_deleted`, `type_in`, `date_input_gl`) VALUES
(1, 'eng_gl', 'Admin', 'dddddddddddd', 'dddddddddddd', 'zzzzzzzzzzzz', 'GHC', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '0', '0', '40.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', 'fffffffffff', '1000', '1', '10.00', 'cccccccccccccc', '1000', '1', '10.00', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '160.00', '0', '0', '160.00', 'ffffffffffffff', 'xxxxxxxxxxxxxxxxxxxxxxx', 0, NULL, '2020-08-01'),
(2, 'eng_gl', 'Admin', '', '', '', 'none', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'dsqwwwww', '1000', '1', '10.00', '11ewwqfsc1', '1000', '1', '10.00', '1wefcwa', '1000', '1', '10.00', 'wefc', '1000', '1', '10.00', 'efca', '1000', '1', '10.00', '0', '0', '50.00', '0', '0', '50.00', 'vvvvvvv', 'vvvvvvvv', 1, NULL, '2020-09-01');

-- --------------------------------------------------------

--
-- Table structure for table `eng_for_pl`
--

CREATE TABLE `eng_for_pl` (
  `id` int(11) NOT NULL,
  `eng_pl` varchar(150) NOT NULL,
  `underwriter_pl` varchar(256) NOT NULL,
  `insured_pl` varchar(256) NOT NULL,
  `industry_pl` varchar(256) NOT NULL,
  `intermediary_pl` varchar(256) NOT NULL,
  `selectCurrency_pl` varchar(256) NOT NULL,
  `operations_si` varchar(256) NOT NULL,
  `operations_rate` varchar(256) NOT NULL,
  `operations_prem` varchar(256) NOT NULL,
  `pi_si` varchar(256) NOT NULL,
  `pi_rate` varchar(256) NOT NULL,
  `pi_prem` varchar(256) NOT NULL,
  `all_si` varchar(256) NOT NULL,
  `all_rate` varchar(256) NOT NULL,
  `all_prem` varchar(256) NOT NULL,
  `bppl_si` varchar(256) NOT NULL,
  `bppl_rate` varchar(256) NOT NULL,
  `bppl_prem` varchar(256) NOT NULL,
  `pl2_si` varchar(256) NOT NULL,
  `pl2_rate` varchar(256) NOT NULL,
  `pl2_prem` varchar(256) NOT NULL,
  `tl_si` varchar(256) NOT NULL,
  `tl_rate` varchar(256) NOT NULL,
  `tl_prem` varchar(256) NOT NULL,
  `cll_si` varchar(256) NOT NULL,
  `cll_rate` varchar(256) NOT NULL,
  `cll_prem` varchar(256) NOT NULL,
  `ws_si` varchar(256) NOT NULL,
  `ws_rate` varchar(256) NOT NULL,
  `ws_prem` varchar(256) NOT NULL,
  `other_desc_pl` varchar(256) NOT NULL,
  `other_si_pl` varchar(256) NOT NULL,
  `other_rate_pl` varchar(256) NOT NULL,
  `other_prem_pl` varchar(256) NOT NULL,
  `other_desc_pl1` varchar(256) NOT NULL,
  `other_si_pl1` varchar(256) NOT NULL,
  `other_rate_pl1` varchar(256) NOT NULL,
  `other_prem_pl1` varchar(256) NOT NULL,
  `other_desc_pl2` varchar(256) NOT NULL,
  `other_si_pl2` varchar(256) NOT NULL,
  `other_rate_pl2` varchar(256) NOT NULL,
  `other_prem_pl2` varchar(256) NOT NULL,
  `other_desc_pl3` varchar(256) NOT NULL,
  `other_si_pl3` varchar(256) NOT NULL,
  `other_rate_pl3` varchar(256) NOT NULL,
  `other_prem_pl3` varchar(256) NOT NULL,
  `other_desc_pl4` varchar(256) NOT NULL,
  `other_si_pl4` varchar(256) NOT NULL,
  `other_rate_pl4` varchar(256) NOT NULL,
  `other_prem_pl4` varchar(256) NOT NULL,
  `si_engo_pl` varchar(256) NOT NULL,
  `rate_engo_pl` varchar(256) NOT NULL,
  `premium_engo_pl` varchar(256) NOT NULL,
  `de_si` varchar(256) NOT NULL,
  `subject_si` varchar(256) NOT NULL,
  `is_deleted` int(11) NOT NULL DEFAULT '0',
  `type_in` varchar(255) DEFAULT NULL,
  `date_input_pl` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `eng_for_pl`
--

INSERT INTO `eng_for_pl` (`id`, `eng_pl`, `underwriter_pl`, `insured_pl`, `industry_pl`, `intermediary_pl`, `selectCurrency_pl`, `operations_si`, `operations_rate`, `operations_prem`, `pi_si`, `pi_rate`, `pi_prem`, `all_si`, `all_rate`, `all_prem`, `bppl_si`, `bppl_rate`, `bppl_prem`, `pl2_si`, `pl2_rate`, `pl2_prem`, `tl_si`, `tl_rate`, `tl_prem`, `cll_si`, `cll_rate`, `cll_prem`, `ws_si`, `ws_rate`, `ws_prem`, `other_desc_pl`, `other_si_pl`, `other_rate_pl`, `other_prem_pl`, `other_desc_pl1`, `other_si_pl1`, `other_rate_pl1`, `other_prem_pl1`, `other_desc_pl2`, `other_si_pl2`, `other_rate_pl2`, `other_prem_pl2`, `other_desc_pl3`, `other_si_pl3`, `other_rate_pl3`, `other_prem_pl3`, `other_desc_pl4`, `other_si_pl4`, `other_rate_pl4`, `other_prem_pl4`, `si_engo_pl`, `rate_engo_pl`, `premium_engo_pl`, `de_si`, `subject_si`, `is_deleted`, `type_in`, `date_input_pl`) VALUES
(1, 'eng_pl', 'Admin', 'P', 'L', 'PL', 'GHC', '0', '0', '0', '0', '0', '0', '1000', '1', '10.00', '0', '0', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', 'aaaaaaaaaaaa', '1000', '1', '10.00', 'fffffffffffff', '1000', '1', '10.00', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '70.00', 'aaaaaaaaaaaaaaaa', 'sssssssssssssssssssssss', 1, NULL, '2020-08-01'),
(2, 'eng_pl', 'Admin', 'aaa', 'aaaaaa', 'aaaaaaaa', 'GHC', '0', '0', '0', '0', '0', '0', '1000', '1', '10.00', '0', '0', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', 'aaaaaaaaaaaaaaaa', '1000', '1', '10.00', 'ddddddddddd', '1000', '1', '10.00', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '70.00', 'ssssssssssss', 'fffffffffffffffffffffff', 0, NULL, '2020-08-01');

-- --------------------------------------------------------

--
-- Table structure for table `eng_gpa`
--

CREATE TABLE `eng_gpa` (
  `id` int(11) NOT NULL,
  `underwriter_gpa` varchar(255) DEFAULT NULL,
  `insured_gpa` varchar(255) DEFAULT NULL,
  `industry_gpa` varchar(255) DEFAULT NULL,
  `intermediary_gpa` varchar(255) DEFAULT NULL,
  `selectCurrency_gpa` varchar(255) DEFAULT NULL,
  `num_asc` varchar(255) DEFAULT NULL,
  `clerical_as` varchar(255) DEFAULT NULL,
  `clerical_num` varchar(255) DEFAULT NULL,
  `clerical_etas` varchar(255) DEFAULT NULL,
  `clerical_cs` varchar(255) DEFAULT NULL,
  `nc_as` varchar(255) DEFAULT NULL,
  `nc_num` varchar(255) DEFAULT NULL,
  `nc_etas` varchar(255) DEFAULT NULL,
  `nc_cs` varchar(255) DEFAULT NULL,
  `mors_as` varchar(255) DEFAULT NULL,
  `mors_num` varchar(255) DEFAULT NULL,
  `mors_etas` varchar(255) DEFAULT NULL,
  `mors_cs` varchar(255) DEFAULT NULL,
  `artisans_as` varchar(255) DEFAULT NULL,
  `artisans_num` varchar(255) DEFAULT NULL,
  `artisans_etas` varchar(255) DEFAULT NULL,
  `artisans_cs` varchar(255) DEFAULT NULL,
  `sormw_as` varchar(255) DEFAULT NULL,
  `sormw_num` varchar(255) DEFAULT NULL,
  `sormw_etas` varchar(255) DEFAULT NULL,
  `sormw_cs` varchar(255) DEFAULT NULL,
  `total_as` varchar(255) DEFAULT NULL,
  `total_num` varchar(255) DEFAULT NULL,
  `total_etas` varchar(255) DEFAULT NULL,
  `total_cs` varchar(255) DEFAULT NULL,
  `death_as` varchar(255) DEFAULT NULL,
  `death_num` varchar(255) DEFAULT NULL,
  `death_etas` varchar(255) DEFAULT NULL,
  `death_cs` varchar(255) DEFAULT NULL,
  `pd_terms` varchar(255) DEFAULT NULL,
  `pd_cs` varchar(255) DEFAULT NULL,
  `pd_rate` varchar(255) DEFAULT NULL,
  `pd_prem` varchar(255) DEFAULT NULL,
  `td_terms` varchar(255) DEFAULT NULL,
  `td_cs` varchar(255) DEFAULT NULL,
  `td_rate` varchar(255) DEFAULT NULL,
  `td_prem` varchar(255) DEFAULT NULL,
  `me_terms` varchar(255) DEFAULT NULL,
  `me_cs` varchar(255) DEFAULT NULL,
  `me_rate` varchar(255) DEFAULT NULL,
  `me_prem` varchar(255) DEFAULT NULL,
  `death4_as` varchar(255) DEFAULT NULL,
  `death4_num` varchar(255) DEFAULT NULL,
  `death4_etas` varchar(255) DEFAULT NULL,
  `death4_cs` varchar(255) DEFAULT NULL,
  `pd4_terms` varchar(255) DEFAULT NULL,
  `pd4_cs` varchar(255) DEFAULT NULL,
  `pd4_rate` varchar(255) DEFAULT NULL,
  `pd4_prem` varchar(255) DEFAULT NULL,
  `td4_terms` varchar(255) DEFAULT NULL,
  `td4_cs` varchar(255) DEFAULT NULL,
  `td4_rate` varchar(255) DEFAULT NULL,
  `td4_prem` varchar(255) DEFAULT NULL,
  `me4_terms` varchar(255) DEFAULT NULL,
  `me4_cs` varchar(255) DEFAULT NULL,
  `me4_rate` varchar(255) DEFAULT NULL,
  `me4_prem` varchar(255) DEFAULT NULL,
  `total_prem_term` varchar(255) DEFAULT NULL,
  `total_prem_cs` varchar(255) DEFAULT NULL,
  `total_prem_rate` varchar(255) DEFAULT NULL,
  `total_prems` varchar(255) DEFAULT NULL,
  `gd4gpa_terms` varchar(255) DEFAULT NULL,
  `gd4gpa_cs` varchar(255) DEFAULT NULL,
  `gd4gpa_rate` varchar(255) DEFAULT NULL,
  `gd4gpa_prem` varchar(255) DEFAULT NULL,
  `ap4gpa_terms` varchar(255) DEFAULT NULL,
  `ap4gpa_cs` varchar(255) DEFAULT NULL,
  `ap4gpa_rate` varchar(255) DEFAULT NULL,
  `ap4gpa_prem` varchar(255) DEFAULT NULL,
  `deduc_terms` varchar(255) DEFAULT NULL,
  `sub1_terms` varchar(255) DEFAULT NULL,
  `date_input_gpa` date DEFAULT NULL,
  `is_deleted` int(11) NOT NULL DEFAULT '0',
  `type_in` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `eng_gpa`
--

INSERT INTO `eng_gpa` (`id`, `underwriter_gpa`, `insured_gpa`, `industry_gpa`, `intermediary_gpa`, `selectCurrency_gpa`, `num_asc`, `clerical_as`, `clerical_num`, `clerical_etas`, `clerical_cs`, `nc_as`, `nc_num`, `nc_etas`, `nc_cs`, `mors_as`, `mors_num`, `mors_etas`, `mors_cs`, `artisans_as`, `artisans_num`, `artisans_etas`, `artisans_cs`, `sormw_as`, `sormw_num`, `sormw_etas`, `sormw_cs`, `total_as`, `total_num`, `total_etas`, `total_cs`, `death_as`, `death_num`, `death_etas`, `death_cs`, `pd_terms`, `pd_cs`, `pd_rate`, `pd_prem`, `td_terms`, `td_cs`, `td_rate`, `td_prem`, `me_terms`, `me_cs`, `me_rate`, `me_prem`, `death4_as`, `death4_num`, `death4_etas`, `death4_cs`, `pd4_terms`, `pd4_cs`, `pd4_rate`, `pd4_prem`, `td4_terms`, `td4_cs`, `td4_rate`, `td4_prem`, `me4_terms`, `me4_cs`, `me4_rate`, `me4_prem`, `total_prem_term`, `total_prem_cs`, `total_prem_rate`, `total_prems`, `gd4gpa_terms`, `gd4gpa_cs`, `gd4gpa_rate`, `gd4gpa_prem`, `ap4gpa_terms`, `ap4gpa_cs`, `ap4gpa_rate`, `ap4gpa_prem`, `deduc_terms`, `sub1_terms`, `date_input_gpa`, `is_deleted`, `type_in`) VALUES
(1, 'Admin', 'nnnnnnnnnnnnn', 'ddddddddddddddddddd', 'dddddddddddddddd', 'EUROS', '2', '1000', '1', '1,000.00', '2,000.00', '1000', '1', '1,000.00', '2,000.00', '1000', '1', '1,000.00', '2,000.00', '1000', '1', '1,000.00', '2,000.00', '1000', '1', '1,000.00', '2,000.00', '0', '0', '5,000.00', '10,000.00', '100.00', '1000', '1', '1,000.00', '100.00', '1000', '1', '1,000.00', '1/52 * Annual Salary', '1000', '1', '1,000.00', '2.00', '1000', '1', '1,000.00', '100.00', '1000', '1', '1,000.00', '100.00', '1000', '1', '1,000.00', '1/52 * Annual Salary', '1000', '1', '1,000.00', '2.00', '1000', '1', '1,000.00', '0', '0', '0', '8,000.00', '0', '0', '10.00', '800.00', '0', '0', '0', '7,200.00', 'eeeeeeeeeeeeeee', 'eeeeeeeeeeeeeeeeeeeeeeeeeeee', '2020-09-11', 0, NULL),
(2, 'Admin', '', '', '', 'GHC', '2', '10000', '5', '50,000.00', '100,000.00', '5000', '2', '10,000.00', '20,000.00', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '60,000.00', '120,000.00', '100.00', '120,000.00', '0', '42,000.00', '100.00', '120,000.00', '0', '0', '1/52 * Annual Salary', '1,153.85', '0', '0', '2.00', '2,400.00', '0', '0', '100.00', '120,000.00', '0', '0', '100.00', '120,000.00', '0', '0', '1/52 * Annual Salary', '1,153.85', '0', '0', '2.00', '2,400.00', '0', '0', '0', '0', '0', '42,000.00', '0', '0', '10.00', '4,200.00', '0', '0', '0', '37,800.00', '', '', '2020-09-18', 0, NULL),
(3, 'Admin', 'PURE TEAM CONSULT', 'CONSULTANCY', 'RELLIUS INSURANCE BROKERS', 'GHC', '5', '10000', '2', '20,000.00', '100,000.00', '2000', '2', '4,000.00', '20,000.00', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '24,000.00', '120,000.00', '100.00', '120,000.00', '0', '0.00', '100.00', '120,000.00', '0', '0', '1/52 * Annual Salary', '461.54', '0', '0', '2.00', '2,400.00', '0', '0', '100.00', '120,000.00', '0.1', '12,000.00', '100.00', '120,000.00', '00.25', '30,000.00', '1/52 * Annual Salary', '461.54', '33.33', '15,383.13', '2.00', '2,400.00', '1.5', '3,600.00', '0', '0', '0', '60,983.13', '0', '0', '10.00', '6,098.31', '0', '0', '0', '54,884.82', '', '', '2020-09-18', 0, NULL),
(4, 'Admin', '', '', '', 'GHC', '5', '1000', '1', '1,000.00', '5,000.00', '1000', '1', '1,000.00', '5,000.00', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '2,000.00', '10,000.00', '100.00', '10,000.00', '1', '10,000.00', '100.00', '10,000.00', '1', '10,000.00', '1/52 * Annual Salary', '38.46', '1', '38.46', '2.00', '200.00', '1', '200.00', '100.00', '10,000.00', '0.1', '1,000.00', '100.00', '10,000.00', '1', '10,000.00', '1/52 * Annual Salary', '38.46', '1', '38.46', '2.00', '200.00', '1', '200.00', '0', '0', '0', '31,476.92', '0', '0', '10.00', '3,147.69', '0', '0', '0', '28,329.23', '', '', '2020-10-03', 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `eng_money`
--

CREATE TABLE `eng_money` (
  `id` int(11) NOT NULL,
  `eng_m` varchar(150) NOT NULL,
  `underwriter_m` varchar(256) NOT NULL,
  `insured_m` varchar(256) NOT NULL,
  `industry_m` varchar(256) NOT NULL,
  `intermediary_m` varchar(256) NOT NULL,
  `selectCurrency_m` varchar(256) NOT NULL,
  `ptl_si` varchar(256) NOT NULL,
  `ptl_rate` varchar(256) NOT NULL,
  `ptl_prem` varchar(256) NOT NULL,
  `ac_si` varchar(256) NOT NULL,
  `ac_rate` varchar(256) NOT NULL,
  `ac_prem` varchar(256) NOT NULL,
  `loi_cis_si` varchar(256) NOT NULL,
  `loi_cis_rate` varchar(256) NOT NULL,
  `loi_cis_prem` varchar(256) NOT NULL,
  `loi_hp_limits` varchar(256) NOT NULL,
  `loi_hp_rate` varchar(256) NOT NULL,
  `loi_hp_prem` varchar(256) NOT NULL,
  `other_desc_mi` varchar(256) NOT NULL,
  `other_limit_mi` varchar(256) NOT NULL,
  `other_rate_mi` varchar(256) NOT NULL,
  `other_prem_mi` varchar(256) NOT NULL,
  `other_desc_mi1` varchar(256) NOT NULL,
  `other_limit_mi1` varchar(256) NOT NULL,
  `other_rate_mi1` varchar(256) NOT NULL,
  `other_prem_mi1` varchar(256) NOT NULL,
  `other_desc_mi2` varchar(256) NOT NULL,
  `other_limit_mi2` varchar(256) NOT NULL,
  `other_rate_mi2` varchar(256) NOT NULL,
  `other_prem_mi2` varchar(256) NOT NULL,
  `ap_money_si` varchar(256) NOT NULL,
  `ap_money_rate` varchar(256) NOT NULL,
  `ap_money_prem` varchar(256) NOT NULL,
  `de_money_si` varchar(256) NOT NULL,
  `sub_money_si` varchar(256) NOT NULL,
  `is_deleted` int(11) NOT NULL DEFAULT '0',
  `type_in` varchar(255) DEFAULT NULL,
  `date_input` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `eng_money`
--

INSERT INTO `eng_money` (`id`, `eng_m`, `underwriter_m`, `insured_m`, `industry_m`, `intermediary_m`, `selectCurrency_m`, `ptl_si`, `ptl_rate`, `ptl_prem`, `ac_si`, `ac_rate`, `ac_prem`, `loi_cis_si`, `loi_cis_rate`, `loi_cis_prem`, `loi_hp_limits`, `loi_hp_rate`, `loi_hp_prem`, `other_desc_mi`, `other_limit_mi`, `other_rate_mi`, `other_prem_mi`, `other_desc_mi1`, `other_limit_mi1`, `other_rate_mi1`, `other_prem_mi1`, `other_desc_mi2`, `other_limit_mi2`, `other_rate_mi2`, `other_prem_mi2`, `ap_money_si`, `ap_money_rate`, `ap_money_prem`, `de_money_si`, `sub_money_si`, `is_deleted`, `type_in`, `date_input`) VALUES
(1, '', 'Admin', '', '', '', 'none', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, NULL, '2020-04-14'),
(2, '', 'Admin', 'dwv', 'efvs', 'dvxs', 'GBP', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '40.00', '0', '0', 0, NULL, '2020-07-03'),
(3, 'eng_m', 'Admin', 'M', 'I', 'MONEY INSURANCE', 'U$D', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '40.00', '0', '0', 0, NULL, '2020-07-23'),
(5, 'eng_m', 'Admin', 'aaaaaaaaaa', 'aaaaaaaaaa', 'sssssssssssssssssssss', 'GHC', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', 'sssss', '1000', '1', '10.00', 'ssssssss', '1000', '1', '10.00', '', '', '', '', '0', '0', '60.00', 'ssssss', 'zzzzzzzzzzz', 1, NULL, '2020-08-02'),
(6, 'eng_m', 'Admin', 'kty', 'microfinance', 'kek', 'U$D', '250000', '0.50', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '0', '0', '0', '', '0', '0', '0', '', '', '', '', '0', '0', '0', '', '', 0, NULL, '2020-08-05'),
(7, 'eng_m', 'Admin', 'thy kingdom', 'bank', 'kek', 'GHC', '2500000', '0.35', '8,750.00', '2500000', '0', '8,750.00', '0', '0', '0', '0', '0', '0', '', '0', '0', '0', '', '0', '0', '0', '', '', '', '', '0', '0', '17,500.00', '', '', 0, NULL, '2020-08-05'),
(8, 'eng_m', 'Admin', '', '', '', 'none', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'j', '1000', '1', '10.00', 'aaaaaa', '1000', '1', '10.00', 'ooooooooo', '1000', '1', '10.00', '0', '0', '30.00', 'oooooooooooooo', 'ooooooooooooooo', 0, NULL, '2020-09-02');

-- --------------------------------------------------------

--
-- Table structure for table `eng_other`
--

CREATE TABLE `eng_other` (
  `eng_other_id` int(11) NOT NULL,
  `eng_oname` varchar(254) NOT NULL,
  `underwriter_mb` varchar(256) NOT NULL,
  `insured_mb` varchar(256) NOT NULL,
  `industry_mb` varchar(256) NOT NULL,
  `intermediary_mb` varchar(256) NOT NULL,
  `selectCurrency_mb` varchar(256) NOT NULL,
  `tsi_nrv` varchar(255) NOT NULL,
  `tsi_rate` varchar(255) NOT NULL,
  `tsi_prem` varchar(255) NOT NULL,
  `srcc_nrv` varchar(255) NOT NULL,
  `srcc_rate` varchar(255) NOT NULL,
  `srcc_prem` varchar(255) NOT NULL,
  `onwef_nrv` varchar(255) NOT NULL,
  `onwef_rate` varchar(255) NOT NULL,
  `onwef_prem` varchar(255) NOT NULL,
  `airfreight_nrv` varchar(255) NOT NULL,
  `airfreight_rate` varchar(255) NOT NULL,
  `airfreight_prem` varchar(255) NOT NULL,
  `theft_nrv` varchar(255) NOT NULL,
  `theft_rate` varchar(255) NOT NULL,
  `theft_prem` varchar(255) NOT NULL,
  `mpe_nrv` varchar(255) NOT NULL,
  `mpe_rate` varchar(255) NOT NULL,
  `mpe_prem` varchar(255) NOT NULL,
  `sptl_nrv` varchar(255) NOT NULL,
  `sptl_rate` varchar(255) NOT NULL,
  `sptl_prem` varchar(255) NOT NULL,
  `other_desc_mb` varchar(256) NOT NULL,
  `other_nrv_mb` varchar(256) NOT NULL,
  `other_rate_mb` varchar(256) NOT NULL,
  `other_prem_mb` varchar(256) NOT NULL,
  `other_desc_mb1` varchar(256) NOT NULL,
  `other_nrv_mb1` varchar(256) NOT NULL,
  `other_rate_mb1` varchar(256) NOT NULL,
  `other_prem_mb1` varchar(256) NOT NULL,
  `other_desc_mb2` varchar(256) NOT NULL,
  `other_nrv_mb2` varchar(256) NOT NULL,
  `other_rate_mb2` varchar(256) NOT NULL,
  `other_prem_mb2` varchar(256) NOT NULL,
  `other_desc_mb3` varchar(256) NOT NULL,
  `other_nrv_mb3` varchar(256) NOT NULL,
  `other_rate_mb3` varchar(256) NOT NULL,
  `other_prem_mb3` varchar(256) NOT NULL,
  `other_desc_mb4` varchar(256) NOT NULL,
  `other_nrv_mb4` varchar(256) NOT NULL,
  `other_rate_mb4` varchar(256) NOT NULL,
  `other_prem_mb4` varchar(256) NOT NULL,
  `ap_nrv` varchar(255) NOT NULL,
  `ap_rate` varchar(255) NOT NULL,
  `ap_prem` varchar(255) NOT NULL,
  `deduct_nrv` varchar(255) NOT NULL,
  `sub_nrv` varchar(255) NOT NULL,
  `is_deleted` int(11) NOT NULL DEFAULT '0',
  `type_in` varchar(255) DEFAULT NULL,
  `date_input` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `eng_other`
--

INSERT INTO `eng_other` (`eng_other_id`, `eng_oname`, `underwriter_mb`, `insured_mb`, `industry_mb`, `intermediary_mb`, `selectCurrency_mb`, `tsi_nrv`, `tsi_rate`, `tsi_prem`, `srcc_nrv`, `srcc_rate`, `srcc_prem`, `onwef_nrv`, `onwef_rate`, `onwef_prem`, `airfreight_nrv`, `airfreight_rate`, `airfreight_prem`, `theft_nrv`, `theft_rate`, `theft_prem`, `mpe_nrv`, `mpe_rate`, `mpe_prem`, `sptl_nrv`, `sptl_rate`, `sptl_prem`, `other_desc_mb`, `other_nrv_mb`, `other_rate_mb`, `other_prem_mb`, `other_desc_mb1`, `other_nrv_mb1`, `other_rate_mb1`, `other_prem_mb1`, `other_desc_mb2`, `other_nrv_mb2`, `other_rate_mb2`, `other_prem_mb2`, `other_desc_mb3`, `other_nrv_mb3`, `other_rate_mb3`, `other_prem_mb3`, `other_desc_mb4`, `other_nrv_mb4`, `other_rate_mb4`, `other_prem_mb4`, `ap_nrv`, `ap_rate`, `ap_prem`, `deduct_nrv`, `sub_nrv`, `is_deleted`, `type_in`, `date_input`) VALUES
(1, '', '', '', '', '', '', '30,000.00', '3.3%', '990.00', '15,000.00', '1', '150.00', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1,140.00', '0', '0', 0, NULL, NULL),
(2, '', 'Admin', 'D', 'A', 'DA', 'U$D', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', '', '', '', '1000', '1', '10.00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '50.00', '0', '0', 0, NULL, '2020-07-06'),
(3, '', 'Admin', 'M', 'A', 'X', 'GBP', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', '', '', '', '1000', '1', '10.00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '50.00', '0', '0', 0, NULL, '0000-00-00'),
(4, '', 'Admin', 'AA', 'BB', 'AB', 'GBP', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', '', '', '', '1000', '1', '10.00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '50.00', '0', '0', 0, NULL, '0000-00-00'),
(5, 'eng_mb', 'Admin', 'gbgfv', 'ghf', 'fgn', 'U$D', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '0', 1, NULL, '2020-07-18'),
(6, 'eng_ee', 'Admin', 'thgm', 'ghjnb', 'hgbnv', 'EUROS', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '0', '0', '0', 0, NULL, '2020-07-18'),
(8, 'eng_ee', 'Admin', 'E', 'E', 'EE', 'U$D', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '1,000.00', '1000', '1', '1,000.00', '1000', '1', '1,000.00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2,030.00', '0', '0', 0, NULL, '2020-07-26'),
(9, 'eng_mb', 'Admin', 'aa', 'aaa', 'aaaa', 'GHC', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', '', '', '', '1000', '1', '10.00', 'aaaaa', '1000', '1', '10.00', 'aaaaaa', '1000', '1', '10.00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '70.00', 'acv', 'bbbb', 0, NULL, '2020-07-30'),
(10, 'eng_ee', 'Admin', '', '', '', 'none', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '', '0', '0', '0', '', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '0', '', '', 0, NULL, '2020-07-30'),
(11, 'eng_ee', 'Admin', 'a', 'aa', 'aaa', 'GHC', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', 'asdfg', '1000', '1', '10.00', 'sdfg', '1000', '1', '10.00', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '80.00', 'sdfghjkl', 'cccccccccccccccccc', 0, NULL, '2020-07-30'),
(12, 'eng_mb', 'Admin', '', '', '', 'none', '2000000', '0.85', '17,000.00', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', '0', '0', '0', '', '0', '0', '0', '', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '17,000.00', '10% EEL, MIN. GHC5000', '', 1, NULL, '2020-08-07'),
(13, 'eng_ee', 'Admin', 'xcsadf', 'qfqwf', 'ewfwelkdvm,`', 'GHC', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', 'efsc', '1000', '1', '10.00', 'wgedvs', '1000', '1', '10.00', '10.00', '10.00', '10.00', '10.00', '10.00', '10.00', '10.00', '10.00', '10.00', '10.00', '10.00', '10.00', '0', '0', '80.00', 'ffg', 'ffffffffffffffffff', 0, NULL, '2020-08-26'),
(14, 'eng_ee', 'Admin', 'thgm', 'ghjnb', 'dddddddddddddddd', 'GBP', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', 'wwww', '1000', '1', '10.00', 'dddd', '1000', '1', '10.00', 'df', '1000', '1', '10.00', 'ff', '1000', '1', '10.00', 'fffffffff', '1000', '1', '10.00', '0', '0', '110.00', 'fffffffffff', 'ffffffffffff', 1, NULL, '2020-08-27'),
(15, 'eng_mb', 'Admin', 'dvx', 'fwcd', 'wdvc', 'GHC', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', '', '', '', '1000', '1', '10.00', 'swqsc', '1000', '1', '10.00', 'wc', '1000', '1', '10.00', 'ddd', '1000', '1', '10.00', 'wfc', '1000', '1', '10.00', 'evd', '1000', '1', '10.00', '', '', '100.00', 'wdv', 'wdv', 0, NULL, '2020-10-08'),
(16, 'eng_ee', 'Admin', 'a', 's', 's', 'GBP', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', 'wqscz', '1000', '1', '10.00', 'qeasc', '1000', '1', '10.00', 'wedvc', '1000', '1', '10.00', 'dv', '1000', '1', '10.00', 'fff', '1000', '1', '10.00', '0', '0', '110.00', 'ewdfv', 'wedvx', 0, NULL, '2020-10-08');

-- --------------------------------------------------------

--
-- Table structure for table `eng_pi_liability`
--

CREATE TABLE `eng_pi_liability` (
  `id` int(11) NOT NULL,
  `pi_fg` varchar(150) NOT NULL,
  `underwriter_pi` varchar(256) NOT NULL,
  `insured_pi` varchar(256) NOT NULL,
  `industry_pi` varchar(256) NOT NULL,
  `intermediary_pi` varchar(256) NOT NULL,
  `selectCurrency_pi` varchar(256) NOT NULL,
  `cos_si` varchar(256) NOT NULL,
  `cos_rate` varchar(256) NOT NULL,
  `cos_prem` varchar(256) NOT NULL,
  `apob_si` varchar(256) NOT NULL,
  `apob_rate` varchar(256) NOT NULL,
  `apob_prem` varchar(256) NOT NULL,
  `pcl_si` varchar(256) NOT NULL,
  `pcl_rate` varchar(256) NOT NULL,
  `pcl_prem` varchar(256) NOT NULL,
  `allpi_si` varchar(256) NOT NULL,
  `allpi_rate` varchar(256) NOT NULL,
  `allpi_prem` varchar(256) NOT NULL,
  `pi_fg_desc_do` varchar(256) NOT NULL,
  `pi_fg_si_do` varchar(256) NOT NULL,
  `pi_fg_rate_do` varchar(256) NOT NULL,
  `pi_fg_prem_do` varchar(256) NOT NULL,
  `pi_fg_desc_do1` varchar(256) NOT NULL,
  `pi_fg_si_do1` varchar(256) NOT NULL,
  `pi_fg_rate_do1` varchar(256) NOT NULL,
  `pi_fg_prem_do1` varchar(256) NOT NULL,
  `pi_fg_desc_do2` varchar(256) NOT NULL,
  `pi_fg_si_do2` varchar(256) NOT NULL,
  `pi_fg_rate_do2` varchar(256) NOT NULL,
  `pi_fg_prem_do2` varchar(256) NOT NULL,
  `pi_fg_desc_do3` varchar(256) NOT NULL,
  `pi_fg_si_do3` varchar(256) NOT NULL,
  `pi_fg_rate_do3` varchar(256) NOT NULL,
  `pi_fg_prem_do3` varchar(256) NOT NULL,
  `pi_fg_desc_do4` varchar(256) NOT NULL,
  `pi_fg_si_do4` varchar(256) NOT NULL,
  `pi_fg_rate_do4` varchar(256) NOT NULL,
  `pi_fg_prem_do4` varchar(256) NOT NULL,
  `ap4pi_si` varchar(256) NOT NULL,
  `ap4pi_rate` varchar(256) NOT NULL,
  `ap4pi_prem` varchar(256) NOT NULL,
  `de4pi_si` varchar(256) NOT NULL,
  `sub4pi_si` varchar(256) NOT NULL,
  `is_deleted` int(11) NOT NULL DEFAULT '0',
  `type_in` varchar(255) DEFAULT NULL,
  `date_input` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `eng_pi_liability`
--

INSERT INTO `eng_pi_liability` (`id`, `pi_fg`, `underwriter_pi`, `insured_pi`, `industry_pi`, `intermediary_pi`, `selectCurrency_pi`, `cos_si`, `cos_rate`, `cos_prem`, `apob_si`, `apob_rate`, `apob_prem`, `pcl_si`, `pcl_rate`, `pcl_prem`, `allpi_si`, `allpi_rate`, `allpi_prem`, `pi_fg_desc_do`, `pi_fg_si_do`, `pi_fg_rate_do`, `pi_fg_prem_do`, `pi_fg_desc_do1`, `pi_fg_si_do1`, `pi_fg_rate_do1`, `pi_fg_prem_do1`, `pi_fg_desc_do2`, `pi_fg_si_do2`, `pi_fg_rate_do2`, `pi_fg_prem_do2`, `pi_fg_desc_do3`, `pi_fg_si_do3`, `pi_fg_rate_do3`, `pi_fg_prem_do3`, `pi_fg_desc_do4`, `pi_fg_si_do4`, `pi_fg_rate_do4`, `pi_fg_prem_do4`, `ap4pi_si`, `ap4pi_rate`, `ap4pi_prem`, `de4pi_si`, `sub4pi_si`, `is_deleted`, `type_in`, `date_input`) VALUES
(1, '', 'Admin', 'gfg', 'gn', 'hg', 'GHC', '', '', '', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '30.00', '0', '0', 0, NULL, '2020-07-02'),
(2, '', 'Admin', 'fbvf', 'fb', 'dfb', 'GBP', '', '', '', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '30.00', '0', '0', 0, NULL, '2020-07-02'),
(3, 'eng_pi', 'Admin', 'P', 'I', 'PI', 'U$D', '', '', '', '1000', '1', '10.00', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '30.00', '0', '0', 1, NULL, '2020-07-22'),
(4, 'eng_fg', 'Admin', 'F', 'G', 'GF', 'GBP', '1000', '1', '10.00', '', '', '', '1000', '1', '10.00', '1000', '1', '10.00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '30.00', '0', '0', 0, NULL, '0000-00-00'),
(5, 'eng_fg', 'Admin', '', '', '', 'none', '0', '0', '0', '', '', '', '3000', '000', '0.00', '200000', '1%', '2,000.00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '2,000.00', '10% each and every loss; min $10000', '0', 0, NULL, '0000-00-00'),
(7, 'eng_fg', 'Admin', 'fff', 'ffff', 'fffggg', 'GBP', '1000', '1', '10.00', '', '', '', '1000', '1', '10.00', '1000', '1', '10.00', 'other_desc_fg', 'other_si_fg', 'other_rate_fg', 'other_prem_fg', 'other_desc_fg1', 'other_si_fg1', 'other_rate_fg1', 'other_prem_fg1', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '50.00', 'qwertyuio7863', '7862qwertyuiop', 0, NULL, '0000-00-00'),
(9, 'eng_fg', 'Admin', '', '', '', 'none', '0', '0', '0', '', '', '', '0', '0', '0', '0', '0', '0', 'qwert', '1000', '1', '10.00', 'qwertyuio', '1000', '1', '10.00', 'bbbb', '1000', '1', '10.00', 'bbbbbbbbbbbbbbbbbbbb', '1000', '1', '10.00', 'bbbbbbbbbbbbbbbbbbbbb', '1000', '1', '10.00', '0', '0', '50.00', 'bbbbbbbbbbbbbbbbbbbbbbbb', 'bbbbbbbbbbbbbbbbbbbbb', 1, NULL, '2020-09-01'),
(10, 'eng_fg', 'Admin', 'ffffffffffffff', 'fffffffffffffffffffff', 'ffffffffffffffffffff', 'GHC', '0', '0', '0', '', '', '', '1000', '1', '10.00', '1000', '1', '10.00', 'swsc', '1000', '1', '10.00', 'wqfsc', '1000', '1', '10.00', 'aqwd', '1000', '1', '10.00', 'qwd', '1000', '1', '10.00', 'wqfs', '1000', '1', '10.00', '0', '0', '70.00', 'ddddddddddddddd', 'ddddddddddddddddd', 0, NULL, '2020-10-05'),
(11, 'eng_pi', 'Admin', 'ws', 'ddd', 'd', 'GBP', '', '', '', '0', '0', '0', '1000', '1', '10.00', '1000', '1', '10.00', 'sac', '1000', '1', '10.00', 'sd', '1000', '1', '10.00', 'wfc', '1000', '1', '10.00', 'dff', '1000', '1', '10.00', 'd', '1000', '1', '10.00', '0', '0', '70.00', 'ffffff', 'fffffffffff', 0, NULL, '2020-10-05');

-- --------------------------------------------------------

--
-- Table structure for table `eng_pm`
--

CREATE TABLE `eng_pm` (
  `id` int(11) NOT NULL,
  `eng_pm` varchar(250) NOT NULL,
  `underwriter_pm` varchar(256) NOT NULL,
  `insured_pm` varchar(256) NOT NULL,
  `industry_pm` varchar(256) NOT NULL,
  `intermediary_pm` varchar(256) NOT NULL,
  `selectCurrency_pm` varchar(256) NOT NULL,
  `new_replacement_market_value` varchar(255) NOT NULL,
  `rate_tsi` varchar(255) NOT NULL,
  `premium_tsi` varchar(255) NOT NULL,
  `other_desc_pm` varchar(256) NOT NULL,
  `other_nrv_pm` varchar(256) NOT NULL,
  `other_rate_pm` varchar(256) NOT NULL,
  `other_prem_pm` varchar(256) NOT NULL,
  `other_desc_pm1` varchar(256) NOT NULL,
  `other_nrv_pm1` varchar(256) NOT NULL,
  `other_rate_pm1` varchar(256) NOT NULL,
  `other_prem_pm1` varchar(256) NOT NULL,
  `other_desc_pm2` varchar(256) NOT NULL,
  `other_nrv_pm2` varchar(256) NOT NULL,
  `other_rate_pm2` varchar(256) NOT NULL,
  `other_prem_pm2` varchar(256) NOT NULL,
  `other_desc_pm3` varchar(256) NOT NULL,
  `other_nrv_pm3` varchar(256) NOT NULL,
  `other_rate_pm3` varchar(256) NOT NULL,
  `other_prem_pm3` varchar(256) NOT NULL,
  `other_desc_pm4` varchar(256) NOT NULL,
  `other_nrv_pm4` varchar(256) NOT NULL,
  `other_rate_pm4` varchar(256) NOT NULL,
  `other_prem_pm4` varchar(256) NOT NULL,
  `ap_nrv` varchar(256) NOT NULL,
  `ap_rate` varchar(256) NOT NULL,
  `ap_premium` varchar(256) NOT NULL,
  `pm_np` varchar(256) NOT NULL,
  `pm_we` varchar(255) NOT NULL,
  `pm_tp` varchar(255) NOT NULL,
  `pm_pd` varchar(255) NOT NULL,
  `pm_t` varchar(255) NOT NULL,
  `pm_o` varchar(255) NOT NULL,
  `nrv_sub` varchar(255) NOT NULL,
  `is_deleted` int(11) NOT NULL DEFAULT '0',
  `type_in` varchar(255) DEFAULT NULL,
  `date_input_pm` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `eng_pm`
--

INSERT INTO `eng_pm` (`id`, `eng_pm`, `underwriter_pm`, `insured_pm`, `industry_pm`, `intermediary_pm`, `selectCurrency_pm`, `new_replacement_market_value`, `rate_tsi`, `premium_tsi`, `other_desc_pm`, `other_nrv_pm`, `other_rate_pm`, `other_prem_pm`, `other_desc_pm1`, `other_nrv_pm1`, `other_rate_pm1`, `other_prem_pm1`, `other_desc_pm2`, `other_nrv_pm2`, `other_rate_pm2`, `other_prem_pm2`, `other_desc_pm3`, `other_nrv_pm3`, `other_rate_pm3`, `other_prem_pm3`, `other_desc_pm4`, `other_nrv_pm4`, `other_rate_pm4`, `other_prem_pm4`, `ap_nrv`, `ap_rate`, `ap_premium`, `pm_np`, `pm_we`, `pm_tp`, `pm_pd`, `pm_t`, `pm_o`, `nrv_sub`, `is_deleted`, `type_in`, `date_input_pm`) VALUES
(1, 'eng_pm_nrv', 'Admin', 'sssssss', 'ssssssssss', 's', 'GHC', '1000', '1', '10.00', 'sss', '1000', '1', '10.00', '1swwd', '1000', '1', '10.00', 'dddddddddd', '1000', '1', '10.00', 'fffffffff`', '1000', '1', '10.00', 'dddddd', '1000', '1', '10.00', '', '', '60.00', 'ddddddddd', 'dddddddd', 'd', 'sddddddd', 'e', 'ddddddddddd', 'dddddddddddddddddddd', 0, NULL, '2020-08-25 21:51:48'),
(2, 'eng_pm_mv', 'Admin', '', '', '', 'NONE', '1000', '1', '10.00', '', '0', '0', '0', '', '0', '0', '0', '', '0', '0', '0', '', '0', '0', '0', '', '1000', '1', '10.00', '', '', '20.00', 'ssssssssssssss', '', '', '', '', '', 'qwertyui', 0, NULL, '2020-08-26 13:19:37'),
(3, 'eng_pm_mv', 'Admin', 'sdddddddd', 'jgnvwlkds', 'nwlfkvns', 'GHC', '1000', '1', '10.00', 'eqqfvdsx', '1000', '1', '10.00', 'wesfgv', '1000', '1', '10.00', 'wedvx', '1000', '1', '10.00', 'dfbef', '1000', '1', '10.00', 'feb c', '1000', '1', '10.00', '', '', '60.00', 'ssssssssssssss', 'ssssssssssss', 'sssssssssssssssssssssss', 'sssssssssss', 'sssssssssssssssss', 'sssssssss', 'qwertyui', 0, NULL, '2020-08-26 17:04:40'),
(4, 'eng_pm_nrv', 'ermk', '', '', '', 'NONE', '0', '0', '0', '', '0', '0', '0', '', '0', '0', '0', '', '0', '0', '0', '', '0', '0', '0', '', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', 1, NULL, '2020-09-02 17:03:38'),
(5, 'eng_pm_mv', 'ermk', '', '', 'nwlfkvns', 'NONE', '0', '0', '0', '', '0', '0', '0', '', '0', '0', '0', '', '0', '0', '0', '', '0', '0', '0', '', '0', '0', '0', '', '', '0', '', '', '', '', '', '', '', 0, NULL, '2020-09-02 17:15:47');

-- --------------------------------------------------------

--
-- Table structure for table `eng_wc`
--

CREATE TABLE `eng_wc` (
  `id` int(11) NOT NULL,
  `heo` varchar(255) DEFAULT NULL,
  `date_input_wc` date DEFAULT NULL,
  `underwriter_wc` varchar(255) DEFAULT NULL,
  `insured_wc` varchar(255) DEFAULT NULL,
  `industry_wc` varchar(255) DEFAULT NULL,
  `intermediary_wc` varchar(255) DEFAULT NULL,
  `selectCurrency_wc` varchar(255) DEFAULT NULL,
  `clerical_asp` varchar(255) DEFAULT NULL,
  `clerical_num_wc` varchar(255) DEFAULT NULL,
  `clerical_dtas` varchar(255) DEFAULT NULL,
  `clerical_heoc` varchar(255) DEFAULT NULL,
  `clerical_bc` varchar(255) DEFAULT NULL,
  `clerical_rate` varchar(255) DEFAULT NULL,
  `clerical_prem` varchar(255) DEFAULT NULL,
  `nonclerical_asp` varchar(255) DEFAULT NULL,
  `nonclerical_num` varchar(255) DEFAULT NULL,
  `nonclerical_dtas` varchar(255) DEFAULT NULL,
  `nonclerical_heoc` varchar(255) DEFAULT NULL,
  `nonclerical_bc` varchar(255) DEFAULT NULL,
  `nonclerical_rate` varchar(255) DEFAULT NULL,
  `nonclerical_prem` varchar(255) DEFAULT NULL,
  `msd_asp` varchar(255) DEFAULT NULL,
  `msd_num` varchar(255) DEFAULT NULL,
  `msd_dtas` varchar(255) DEFAULT NULL,
  `msd_heoc` varchar(255) DEFAULT NULL,
  `msd_bc` varchar(255) DEFAULT NULL,
  `msd_rate` varchar(255) DEFAULT NULL,
  `msd_prem` varchar(255) DEFAULT NULL,
  `tech_asp` varchar(255) DEFAULT NULL,
  `tech_num` varchar(255) DEFAULT NULL,
  `tech_dtas` varchar(255) DEFAULT NULL,
  `tech_heoc` varchar(255) DEFAULT NULL,
  `tech_bc` varchar(255) DEFAULT NULL,
  `tech_rate` varchar(255) DEFAULT NULL,
  `tech_prem` varchar(255) DEFAULT NULL,
  `smldm_asp` varchar(255) DEFAULT NULL,
  `smldm_num` varchar(255) DEFAULT NULL,
  `smldm_dtas` varchar(255) DEFAULT NULL,
  `smldm_heoc` varchar(255) DEFAULT NULL,
  `smldm_bc` varchar(255) DEFAULT NULL,
  `smldm_rate` varchar(255) DEFAULT NULL,
  `smldm_prem` varchar(255) DEFAULT NULL,
  `artpe_asp` varchar(255) DEFAULT NULL,
  `artpe_num` varchar(255) DEFAULT NULL,
  `artpe_dtas` varchar(255) DEFAULT NULL,
  `artpe_heoc` varchar(255) DEFAULT NULL,
  `artpe_bc` varchar(255) DEFAULT NULL,
  `artpe_rate` varchar(255) DEFAULT NULL,
  `artpe_prem` varchar(255) DEFAULT NULL,
  `other_desc` varchar(255) DEFAULT NULL,
  `other_asp` varchar(255) DEFAULT NULL,
  `other_num` varchar(255) DEFAULT NULL,
  `other_dtas` varchar(255) DEFAULT NULL,
  `other_heoc` varchar(255) DEFAULT NULL,
  `other_bc` varchar(255) DEFAULT NULL,
  `other_rate` varchar(255) DEFAULT NULL,
  `other_prem` varchar(255) DEFAULT NULL,
  `other1_desc` varchar(255) DEFAULT NULL,
  `other1_asp` varchar(255) DEFAULT NULL,
  `other1_num` varchar(255) DEFAULT NULL,
  `other1_dtas` varchar(255) DEFAULT NULL,
  `other1_heoc` varchar(255) DEFAULT NULL,
  `other1_bc` varchar(255) DEFAULT NULL,
  `other1_rate` varchar(255) DEFAULT NULL,
  `other1_prem` varchar(255) DEFAULT NULL,
  `total_asp` varchar(255) DEFAULT NULL,
  `total_num` varchar(255) DEFAULT NULL,
  `total_dtas` varchar(255) DEFAULT NULL,
  `total_heoc` varchar(255) DEFAULT NULL,
  `total_bc` varchar(255) DEFAULT NULL,
  `total_rate` varchar(255) DEFAULT NULL,
  `total_prem` varchar(255) DEFAULT NULL,
  `mel1` varchar(255) DEFAULT NULL,
  `asp1` varchar(255) DEFAULT NULL,
  `mel2` varchar(255) DEFAULT NULL,
  `mel3` varchar(255) DEFAULT NULL,
  `mel_bc` varchar(255) DEFAULT NULL,
  `mel_rate` varchar(255) DEFAULT NULL,
  `mel_prem` varchar(255) DEFAULT NULL,
  `mel` varchar(255) DEFAULT NULL,
  `asp2` varchar(255) DEFAULT NULL,
  `mel1ro` varchar(255) DEFAULT NULL,
  `mel2ro` varchar(255) DEFAULT NULL,
  `mel3ro` varchar(255) DEFAULT NULL,
  `mel_bc2` varchar(255) DEFAULT NULL,
  `mel_rate2` varchar(255) DEFAULT NULL,
  `mel_prem2` varchar(255) DEFAULT NULL,
  `cll_num_ro` varchar(255) DEFAULT NULL,
  `asp3` varchar(255) DEFAULT NULL,
  `cll_dtas_ro` varchar(255) DEFAULT NULL,
  `cll_heoc_ro` varchar(255) DEFAULT NULL,
  `cll_bc` varchar(255) DEFAULT NULL,
  `coll_rate` varchar(255) DEFAULT NULL,
  `coll_prem` varchar(255) DEFAULT NULL,
  `cll` varchar(255) DEFAULT NULL,
  `cll_asp` varchar(255) DEFAULT NULL,
  `cll_num_ro22` varchar(255) DEFAULT NULL,
  `cll_dtas_ro22` varchar(255) DEFAULT NULL,
  `cll_heoc_ro22` varchar(255) DEFAULT NULL,
  `cll_bc22` varchar(255) DEFAULT NULL,
  `cll_rate22` varchar(255) DEFAULT NULL,
  `cll_prem222` varchar(255) DEFAULT NULL,
  `tfw_dtas_asp` varchar(255) DEFAULT NULL,
  `tfw_num_ro` varchar(255) DEFAULT NULL,
  `tfw_dtas_ro` varchar(255) DEFAULT NULL,
  `tfw_heoc_ro` varchar(255) DEFAULT NULL,
  `tfw_bc` varchar(255) DEFAULT NULL,
  `tfw_rate` varchar(255) DEFAULT NULL,
  `tfw_prem` varchar(255) DEFAULT NULL,
  `tfw2` varchar(255) DEFAULT NULL,
  `tfw_num_asp2` varchar(255) DEFAULT NULL,
  `tfw_num_ro2` varchar(255) DEFAULT NULL,
  `tfw_dtas_ro2` varchar(255) DEFAULT NULL,
  `tfw_heoc_ro2` varchar(255) DEFAULT NULL,
  `tfw_bc2` varchar(255) DEFAULT NULL,
  `tfw_rate2` varchar(255) DEFAULT NULL,
  `tfw_prem22` varchar(255) DEFAULT NULL,
  `gd_dtas_asp` varchar(255) DEFAULT NULL,
  `gd_num_ro` varchar(255) DEFAULT NULL,
  `gd_dtas_ro` varchar(255) DEFAULT NULL,
  `gd_heoc_ro` varchar(255) DEFAULT NULL,
  `gd_bc` varchar(255) DEFAULT NULL,
  `gd_rate` varchar(255) DEFAULT NULL,
  `gd_prem` varchar(255) DEFAULT NULL,
  `dp_dtas_asp` varchar(255) DEFAULT NULL,
  `dp_num_ro` varchar(255) DEFAULT NULL,
  `dp_dtas_ro` varchar(255) DEFAULT NULL,
  `dp_heoc_ro` varchar(255) DEFAULT NULL,
  `dp_bc` varchar(255) DEFAULT NULL,
  `dep_rate` varchar(255) DEFAULT NULL,
  `dep_prem` varchar(255) DEFAULT NULL,
  `ap_num_asp` varchar(255) DEFAULT NULL,
  `ap_num` varchar(255) DEFAULT NULL,
  `ap_dtas` varchar(255) DEFAULT NULL,
  `ap_heoc` varchar(255) DEFAULT NULL,
  `ap_bc` varchar(255) DEFAULT NULL,
  `ap_rate` varchar(255) DEFAULT NULL,
  `ap_prem` varchar(255) DEFAULT NULL,
  `sub_num` varchar(255) DEFAULT NULL,
  `sub_num2` varchar(255) DEFAULT NULL,
  `is_deleted` int(11) NOT NULL DEFAULT '0',
  `type_in` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `eng_wc`
--

INSERT INTO `eng_wc` (`id`, `heo`, `date_input_wc`, `underwriter_wc`, `insured_wc`, `industry_wc`, `intermediary_wc`, `selectCurrency_wc`, `clerical_asp`, `clerical_num_wc`, `clerical_dtas`, `clerical_heoc`, `clerical_bc`, `clerical_rate`, `clerical_prem`, `nonclerical_asp`, `nonclerical_num`, `nonclerical_dtas`, `nonclerical_heoc`, `nonclerical_bc`, `nonclerical_rate`, `nonclerical_prem`, `msd_asp`, `msd_num`, `msd_dtas`, `msd_heoc`, `msd_bc`, `msd_rate`, `msd_prem`, `tech_asp`, `tech_num`, `tech_dtas`, `tech_heoc`, `tech_bc`, `tech_rate`, `tech_prem`, `smldm_asp`, `smldm_num`, `smldm_dtas`, `smldm_heoc`, `smldm_bc`, `smldm_rate`, `smldm_prem`, `artpe_asp`, `artpe_num`, `artpe_dtas`, `artpe_heoc`, `artpe_bc`, `artpe_rate`, `artpe_prem`, `other_desc`, `other_asp`, `other_num`, `other_dtas`, `other_heoc`, `other_bc`, `other_rate`, `other_prem`, `other1_desc`, `other1_asp`, `other1_num`, `other1_dtas`, `other1_heoc`, `other1_bc`, `other1_rate`, `other1_prem`, `total_asp`, `total_num`, `total_dtas`, `total_heoc`, `total_bc`, `total_rate`, `total_prem`, `mel1`, `asp1`, `mel2`, `mel3`, `mel_bc`, `mel_rate`, `mel_prem`, `mel`, `asp2`, `mel1ro`, `mel2ro`, `mel3ro`, `mel_bc2`, `mel_rate2`, `mel_prem2`, `cll_num_ro`, `asp3`, `cll_dtas_ro`, `cll_heoc_ro`, `cll_bc`, `coll_rate`, `coll_prem`, `cll`, `cll_asp`, `cll_num_ro22`, `cll_dtas_ro22`, `cll_heoc_ro22`, `cll_bc22`, `cll_rate22`, `cll_prem222`, `tfw_dtas_asp`, `tfw_num_ro`, `tfw_dtas_ro`, `tfw_heoc_ro`, `tfw_bc`, `tfw_rate`, `tfw_prem`, `tfw2`, `tfw_num_asp2`, `tfw_num_ro2`, `tfw_dtas_ro2`, `tfw_heoc_ro2`, `tfw_bc2`, `tfw_rate2`, `tfw_prem22`, `gd_dtas_asp`, `gd_num_ro`, `gd_dtas_ro`, `gd_heoc_ro`, `gd_bc`, `gd_rate`, `gd_prem`, `dp_dtas_asp`, `dp_num_ro`, `dp_dtas_ro`, `dp_heoc_ro`, `dp_bc`, `dep_rate`, `dep_prem`, `ap_num_asp`, `ap_num`, `ap_dtas`, `ap_heoc`, `ap_bc`, `ap_rate`, `ap_prem`, `sub_num`, `sub_num2`, `is_deleted`, `type_in`) VALUES
(1, '11,633.33', '2020-09-09', 'Admin', 'David', 'Hollard Insurance', 'James', 'GHC', '1000', '1', '1,000.00', '11,633.33', '1000', '1', '1000', '1000', '1', '1,000.00', '11,633.33', '1000', '1', '1000', '1000', '1', '1,000.00', '11,633.33', '1000', '1', '1000', '1000', '1', '1,000.00', '11,633.33', '1000', '1', '1000', '1000', '1', '1,000.00', '11,633.33', '1000', '1', '1000', '1000', '1', '1,000.00', '11,633.33', '1000', '1', '1000', 'anything here', '1000', '1', '1,000.00', '11,633.33', '100', '1', '100', 'if else ...', '1000', '1', '1,000.00', '11,633.33', '1000', '1', '1000', '0', '0', '0', '0', '0', '0', '7100', '0', '0', '0', '0', '0', '33.33%', '2366.4300', '0', '0', '0', '0', '0', '0', '0', '9466.4300', '0', '0', '0', '0', '0', '15.00%', '1419.9645', '0', '0', '0', '0', '0', '0', '0', '10886.3945', '0', '0', '0', '0', '0', '10.00%', '1088.6395', '0', '0', '0', '0', '0', '0', '0', '11975.0340', '0', '0', '0', '0', '0', '5.00%', '598.7517', '0', '0', '0', '0', '0', '0', '11376.2823', '0', '0', '0', '0', '0', '', '11376.2823', 'you can write down all your deductibles here...', '...or if any subjectivities', 0, NULL),
(2, '14305.64', '2020-09-14', 'Admin', '', '', '', 'none', '12000', '5', '60,000.00', '71,528.20', '71,528.20', '0.35', '25034.87', '3000', '10', '30,000.00', '143,056.40', '143,056.40', '0.55', '78681.02', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '0', '0', '0', '0', '0', '0', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '103715.89', '0', '0', '0', '0', '0', '33.33%', '34568.5061', '0', '0', '0', '0', '0', '0', '0', '138284.3961', '0', '0', '0', '0', '0', '15.00%', '20742.6594', '0', '0', '0', '0', '0', '0', '0', '159027.0555', '0', '0', '0', '0', '0', '10.00%', '15902.7055', '0', '0', '0', '0', '0', '0', '0', '174929.7610', '0', '0', '0', '0', '0', '5.00%', '8746.4880', '0', '0', '0', '0', '0', '0', '166183.2730', '0', '0', '0', '0', '0', '', '166183.2730', '', '', 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `fleet_quotation`
--

CREATE TABLE `fleet_quotation` (
  `id` int(11) NOT NULL,
  `reg_no` varchar(255) NOT NULL,
  `make_of_veh` varchar(255) NOT NULL,
  `value` int(11) NOT NULL,
  `rate` int(11) NOT NULL,
  `basic_prem` int(11) NOT NULL,
  `sc` int(11) NOT NULL,
  `tp_prem` int(11) NOT NULL,
  `ccl` int(11) NOT NULL,
  `cc_load` int(11) NOT NULL,
  `gross_prem` int(11) NOT NULL,
  `ncd` int(11) NOT NULL,
  `net_after_ncd` int(11) NOT NULL,
  `fd` int(11) NOT NULL,
  `net_after_frb` int(11) NOT NULL,
  `exit_load` int(11) NOT NULL,
  `addl_per` int(11) NOT NULL,
  `eco_peril` int(11) NOT NULL,
  `pa` int(11) NOT NULL,
  `pl` int(11) NOT NULL,
  `tppdl` int(11) NOT NULL,
  `eib` int(11) NOT NULL,
  `u_wprem` int(11) NOT NULL,
  `levis` int(11) NOT NULL,
  `pre_payable` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `id` int(11) NOT NULL,
  `username` varchar(256) NOT NULL,
  `fullname` varchar(254) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact` varchar(256) NOT NULL,
  `password` varchar(255) NOT NULL,
  `department` varchar(256) NOT NULL,
  `branch` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`id`, `username`, `fullname`, `email`, `contact`, `password`, `department`, `branch`) VALUES
(15, 'ermk', '', 'ea@gmail.com', '545454', '$2y$10$CDffdzWcl0Xq5iBDpxyDLeJ6fOK1HJuNLZCbAliqLMQo31gOksUri', 'jw', ''),
(16, 'Admin', 'Hollard Admin', 'admin@email.com', '233', '$2y$10$zdlSknJfCLgqRtfFq5nnpOxgVnwUdv5o.b7.z6CfDyHyWJF9x91sa', 'IT', 'Head Office'),
(17, 'maxy', '', 'adzovordavid@gmail.com', '+233', '$2y$10$qN5Qw7uGMqeT2XNZK5oB1eSbL22fNpoNKCV0n51wqvftJW0W8.89S', 'IT', ''),
(18, 'User', '', 'E@gmail.com', '11', '$2y$10$hqr2efzuWenUmwhpL8ql4efPK/U9P8ypcWQs1bB4izHy22gSDyqWa', 'IT', 'HO'),
(19, 'new', '', 'n@gmail.com', '+233', '$2y$10$2s8h8B0E0nbVSgdWYr8mv..Ck9dlAkQgWkTt9yDRjlS9YxUNd8ljG', 'N', 'N');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `refno` int(11) NOT NULL,
  `insurename` varchar(255) NOT NULL,
  `industry` varchar(255) NOT NULL,
  `intermidiary` varchar(255) NOT NULL,
  `dateofquotation` date NOT NULL,
  `afile` varchar(255) NOT NULL,
  `under_writer` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`refno`, `insurename`, `industry`, `intermidiary`, `dateofquotation`, `afile`, `under_writer`) VALUES
(1, 'David.Adzovor', 'ngnw', 'ofnen', '2019-12-31', 'David.Adzovor_1572884583.docx', ''),
(2, 'dvwdv', 'ddd', 'fsfs', '2019-11-05', 'dvwdv_1572960039.docx', ''),
(3, 'fvfddc', '', '', '2019-11-06', 'fvfddc_1573029105.docx', ''),
(4, 'wdvwv', '', '', '2019-11-06', 'wdvwv_1573029746.docx', ''),
(5, 'dcsac', '', '', '2019-11-06', 'dcsac_1573030299.docx', 'Cyril'),
(6, 'erbar', '', '', '2019-11-13', 'erbar_1573633356.docx', 'ewfwed');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `combo_eng`
--
ALTER TABLE `combo_eng`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `config_combo`
--
ALTER TABLE `config_combo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `config_gpa`
--
ALTER TABLE `config_gpa`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `config_quote`
--
ALTER TABLE `config_quote`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `config_wc`
--
ALTER TABLE `config_wc`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `eng_bbb`
--
ALTER TABLE `eng_bbb`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `eng_bi`
--
ALTER TABLE `eng_bi`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `eng_ce`
--
ALTER TABLE `eng_ce`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `eng_do_liability`
--
ALTER TABLE `eng_do_liability`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `eng_for_gl`
--
ALTER TABLE `eng_for_gl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `eng_for_pl`
--
ALTER TABLE `eng_for_pl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `eng_gpa`
--
ALTER TABLE `eng_gpa`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `eng_money`
--
ALTER TABLE `eng_money`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `eng_other`
--
ALTER TABLE `eng_other`
  ADD PRIMARY KEY (`eng_other_id`);

--
-- Indexes for table `eng_pi_liability`
--
ALTER TABLE `eng_pi_liability`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `eng_pm`
--
ALTER TABLE `eng_pm`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `eng_wc`
--
ALTER TABLE `eng_wc`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fleet_quotation`
--
ALTER TABLE `fleet_quotation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`refno`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `combo_eng`
--
ALTER TABLE `combo_eng`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `config_combo`
--
ALTER TABLE `config_combo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `config_gpa`
--
ALTER TABLE `config_gpa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `config_quote`
--
ALTER TABLE `config_quote`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `config_wc`
--
ALTER TABLE `config_wc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `eng_bbb`
--
ALTER TABLE `eng_bbb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `eng_bi`
--
ALTER TABLE `eng_bi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `eng_ce`
--
ALTER TABLE `eng_ce`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
--
-- AUTO_INCREMENT for table `eng_do_liability`
--
ALTER TABLE `eng_do_liability`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `eng_for_gl`
--
ALTER TABLE `eng_for_gl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `eng_for_pl`
--
ALTER TABLE `eng_for_pl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `eng_gpa`
--
ALTER TABLE `eng_gpa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `eng_money`
--
ALTER TABLE `eng_money`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `eng_other`
--
ALTER TABLE `eng_other`
  MODIFY `eng_other_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `eng_pi_liability`
--
ALTER TABLE `eng_pi_liability`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `eng_pm`
--
ALTER TABLE `eng_pm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `eng_wc`
--
ALTER TABLE `eng_wc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `fleet_quotation`
--
ALTER TABLE `fleet_quotation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `refno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
